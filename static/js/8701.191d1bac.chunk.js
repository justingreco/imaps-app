"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8701],{98701:(e,t,r)=>{r.r(t),r.d(t,{default:()=>A});var n=r(27366),o=(r(59486),r(44055)),i=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(79850),r(9014),r(40464)),s=r(97642),a=r(49861),p=(r(63780),r(93169),r(25243),r(69912)),l=r(27823),u=r(30651),c=r(10064),d=r(54472),y=r(92026),f=r(67213),g=r(49818),m=r(78952);let h=class extends d.Z{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getFeatureDefinition(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:r,supportedCrs:n},layer:{apiKey:o,capabilities:i,customParameters:s}}=this;return{capabilities:i,collection:e,layerDefinition:t,queryParameters:{apiKey:o,customParameters:s},spatialReference:r,supportedCrs:n}}queryExtent(e){return null}queryFeatureCount(e){return null}queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((e=>g.default.fromJSON(e)))}queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=this.getFeatureDefinition();return this.load(t).then((()=>(0,f.yN)(r,e,t)))}queryObjectIds(e){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){const r=new RegExp(`^${t}$`,"i");return e.conformsTo.some((e=>r.test(e)))??!1}_getCapabilities(e,t){const r=(0,y.pC)(t)?t.components?.parameters:null;return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:r?.limit?.schema?.maximum??r?.limitFeatures?.schema?.maximum??5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getExtent(e){const t=e.extent?.spatial;if(!t)return null;const r=t.bbox[0],n=4===r.length,o=r[0],i=r[1],s=n?void 0:r[2];return{xmin:o,ymin:i,xmax:n?r[2]:r[3],ymax:n?r[3]:r[4],zmin:s,zmax:n?void 0:r[5],spatialReference:m.Z.WGS84.toJSON()}}_getStorageSpatialReference(e){const t=e.storageCrs??f.$9,r=(0,f.d)(t);return(0,y.Wi)(r)?m.Z.WGS84:new m.Z({wkid:r})}_getSupportedSpatialReferences(e,t){const r="#/crs",n=e.crs??[f.$9],o=n.includes(r)?n.filter((e=>e!==r)).concat(t.crs):n,i=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return o.filter((e=>!i.test(e)))}async _loadOGCServices(e,t){const r=(0,y.pC)(t)?t.signal:null,{apiKey:n,collectionId:o,customParameters:i,fields:s,geometryType:a,hasZ:p,objectIdField:u,timeInfo:d,url:g}=e,m={fields:s?.map((e=>e.toJSON())),geometryType:l.P$.toJSON(a),hasZ:p,objectIdField:u,timeInfo:d?.toJSON()},h={apiKey:n,customParameters:i,signal:r},b=await(0,f.gp)(g,h),[w,v]=await Promise.all([(0,f.G4)(b,h),(0,f.j)(b,h)]);if(!this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new c.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");const S=v.collections.find((e=>e.id===o));if(!S)throw new c.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const C=this._conformsToType(w,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await(0,f.eS)(b,h):null,F=await(0,f.w9)(S,m,h),I=this._getCapabilities(F.hasZ,C),T=this._getExtent(S),j=this._getStorageSpatialReference(S).toJSON(),x=this._getSupportedSpatialReferences(S,v),_=new RegExp(`^${f.Lu}`,"i"),O={};for(const l of x){const e=(0,f.d)(l);(0,y.pC)(e)&&(O[e]||(O[e]=l.replace(_,"")))}F.extent=T,this.featureDefinition={capabilities:I,collection:S,layerDefinition:F,queryParameters:{},spatialReference:j,supportedCrs:O}}};(0,n._)([(0,a.Cb)()],h.prototype,"featureDefinition",void 0),(0,n._)([(0,a.Cb)({constructOnly:!0})],h.prototype,"layer",void 0),(0,n._)([(0,a.Cb)()],h.prototype,"type",void 0),h=(0,n._)([(0,p.j)("esri.layers.graphics.sources.OGCFeatureSource")],h);var b=r(27961),w=r(6693),v=r(46671),S=r(7632),C=r(6061),F=r(94207),I=r(29598),T=r(71684),j=r(56811),x=r(99063),_=r(45948),O=r(39042),P=r(87165),R=r(83040),Z=r(25610),D=r(37270),k=r(77748),G=r(85116),M=r(21149),q=r(81085),E=r(53866);const N=(0,Z.v)();let $=class extends((0,b.V)((0,v.N)((0,S.b)((0,w.h)((0,F.c)((0,x.n)((0,j.M)((0,C.q)((0,I.I)((0,T.Q)((0,s.R)(u.Z)))))))))))){constructor(e){super(e),this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new h({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((()=>this._fetchService(e)))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&null==this.geometryType}set renderer(e){(0,D.YN)(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return(0,q.eZ)(this,e)}createQuery(){return new M.Z}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){let r,n=!1;const o=t?.feature?.attributes,i=this.typeIdField&&o?.[this.typeIdField];return null!=i&&this.types&&(n=this.types.some((t=>t.id==i&&(r=t.domains?.[e],"inherited"===r?.type&&(r=this._getLayerDomain(e)),!0)))),n||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(M.Z.from(e)||this.createQuery(),t))).then((e=>(e?.features?.forEach((e=>{e.layer=e.sourceLayer=this})),e)))}serviceSupportsSpatialReference(e){return this.source?.serviceSupportsSpatialReference(e)??!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),(0,D.YN)(this.renderer,this.fieldsIndex),(0,D.UF)(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};(0,n._)([(0,a.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],$.prototype,"capabilities",void 0),(0,n._)([(0,a.Cb)({type:String,json:{write:!0}})],$.prototype,"collectionId",void 0),(0,n._)([(0,a.Cb)({type:String})],$.prototype,"copyright",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],$.prototype,"defaultPopupTemplate",null),(0,n._)([(0,a.Cb)({type:String})],$.prototype,"definitionExpression",void 0),(0,n._)([(0,a.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],$.prototype,"description",void 0),(0,n._)([(0,a.Cb)({type:String})],$.prototype,"displayField",void 0),(0,n._)([(0,a.Cb)(_.PV)],$.prototype,"elevationInfo",void 0),(0,n._)([(0,a.Cb)(O.d)],$.prototype,"featureReduction",void 0),(0,n._)([(0,a.Cb)({type:[R.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],$.prototype,"fields",void 0),(0,n._)([(0,a.Cb)(N.fieldsIndex)],$.prototype,"fieldsIndex",void 0),(0,n._)([(0,a.Cb)({readOnly:!0,type:E.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],$.prototype,"fullExtent",void 0),(0,n._)([(0,a.Cb)({type:l.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:l.Mk.read}}}}})],$.prototype,"geometryType",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],$.prototype,"hasZ",void 0),(0,n._)([(0,a.Cb)({type:Boolean,readOnly:!0})],$.prototype,"isTable",null),(0,n._)([(0,a.Cb)({type:[k.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:G.r},write:!0}}}})],$.prototype,"labelingInfo",void 0),(0,n._)([(0,a.Cb)(_.iR)],$.prototype,"labelsVisible",void 0),(0,n._)([(0,a.Cb)(_.rn)],$.prototype,"legendEnabled",void 0),(0,n._)([(0,a.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],$.prototype,"objectIdField",void 0),(0,n._)([(0,a.Cb)({type:["OGCFeatureLayer"]})],$.prototype,"operationalLayerType",void 0),(0,n._)([(0,a.Cb)(_.C_)],$.prototype,"popupEnabled",void 0),(0,n._)([(0,a.Cb)({type:o.Z,json:{name:"popupInfo",write:!0}})],$.prototype,"popupTemplate",void 0),(0,n._)([(0,a.Cb)({types:i.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:i.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],$.prototype,"renderer",null),(0,n._)([(0,a.Cb)(_.YI)],$.prototype,"screenSizePerspectiveEnabled",void 0),(0,n._)([(0,a.Cb)({readOnly:!0})],$.prototype,"source",void 0),(0,n._)([(0,a.Cb)({readOnly:!0,type:m.Z,json:{origins:{service:{read:!0}}}})],$.prototype,"spatialReference",void 0),(0,n._)([(0,a.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],$.prototype,"title",void 0),(0,n._)([(0,a.Cb)({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),(0,n._)([(0,a.Cb)({type:String,readOnly:!0})],$.prototype,"typeIdField",void 0),(0,n._)([(0,a.Cb)({type:[P.Z]})],$.prototype,"types",void 0),(0,n._)([(0,a.Cb)(_.HQ)],$.prototype,"url",void 0),$=(0,n._)([(0,p.j)("esri.layers.OGCFeatureLayer")],$);const A=$},60480:(e,t,r)=>{r.d(t,{g:()=>n});const n={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},47615:(e,t,r)=>{r.d(t,{O3:()=>S,lG:()=>F,my:()=>C,q9:()=>p});var n=r(10064),o=r(3182),i=r(80457),s=r(37270);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function p(e){return a[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*u(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function c(e){for(const t of e)if(t.length>2)return!0;return!1}function d(e){let t=0;for(let r=0;r<e.length;r++){const n=e[r],o=e[(r+1)%e.length];t+=n[0]*o[1]-o[0]*n[1]}return t<=0}function y(e){const t=e[0],r=e[e.length-1];return t[0]===r[0]&&t[1]===r[1]&&t[2]===r[2]||e.push(t),e}function f(e,t,r){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,r){return h(e,t.coordinates,r),e}(e,t,r);case"MultiLineString":return function(e,t,r){for(const n of t.coordinates)h(e,n,r);return e}(e,t,r);case"MultiPolygon":return function(e,t,r){for(const n of t.coordinates){g(e,n[0],r);for(let t=1;t<n.length;t++)m(e,n[t],r)}return e}(e,t,r);case"Point":return function(e,t,r){return w(e,t.coordinates,r),e}(e,t,r);case"Polygon":return function(e,t,r){const n=t.coordinates;g(e,n[0],r);for(let o=1;o<n.length;o++)m(e,n[o],r);return e}(e,t,r)}}function g(e,t,r){const n=y(t);!function(e){return!d(e)}(n)?h(e,n,r):b(e,n,r)}function m(e,t,r){const n=y(t);!function(e){return d(e)}(n)?h(e,n,r):b(e,n,r)}function h(e,t,r){for(const n of t)w(e,n,r);e.lengths.push(t.length)}function b(e,t,r){for(let n=t.length-1;n>=0;n--)w(e,t[n],r);e.lengths.push(t.length)}function w(e,t,r){const[n,o,i]=t;e.coords.push(n,o),r.hasZ&&e.coords.push(i||0)}function v(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e){if(!e)throw new n.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new n.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const r="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!r||!o.test(r))throw new n.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r=[],n=new Set,o=new Set;let i,a=!1,d=null,y=!1,{geometryType:f=null}=t,g=!1;for(const s of l(e)){const{geometry:e,properties:t,id:l}=s;if((!e||(f||(f=p(e.type)),p(e.type)===f))&&(a||(a=c(u(e))),y||(y=null!=l,y&&(i=typeof l,d=Object.keys(t).filter((e=>t[e]===l)))),y&&null!=l&&(d.length>1?d=d.filter((e=>t[e]===l)):1===d.length&&(d=t[d[0]]===l?d:[])),!g&&t)){let e=!0;for(const i in t){if(n.has(i))continue;const s=t[i];if(null==s){e=!1,o.add(i);continue}const a=v(s);"unknown"!==a?(o.delete(i),n.add(i),r.push({name:i,alias:i,type:a})):o.add(i)}g=e}}const m=d&&1===d.length&&d[0]||null;if(m)for(const p of r)if(p.name===m&&(0,s.H7)(p)){p.type="esriFieldTypeOID";break}return{fields:r,geometryType:f,hasZ:a,objectIdFieldName:m,objectIdFieldType:i,unknownFields:Array.from(o)}}function F(e,t){return Array.from(function*(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{geometryType:r,objectIdField:n}=t;for(const s of e){const{geometry:e,properties:a,id:l}=s;if(e&&p(e.type)!==r)continue;const u=a||{};let c=u[n]??null;n&&null!=l&&!u[n]&&(u[n]=c=l);const d=new o.u_(e?f(new i.Z,e,t):null,u,null,c);yield d}}(l(e),t))}},63543:(e,t,r)=>{r.d(t,{Dm:()=>u,Hq:()=>c,MS:()=>d,bU:()=>a});var n=r(93169),o=r(84652),i=r(60480),s=r(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?s.I4:"esriGeometryPolyline"===e?s.ET:s.lF}}}const p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function u(e,t){if((0,n.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${p.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const n=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new n}catch(r){return()=>({[t]:null,...e})}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,o.d9)(e)}}]}function d(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:i.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},67213:(e,t,r)=>{r.d(t,{$9:()=>b,G4:()=>S,Lu:()=>h,WW:()=>j,d:()=>I,eS:()=>F,gp:()=>C,j:()=>v,w9:()=>w,yN:()=>T});r(59486);var n=r(76200),o=r(10064),i=r(32718),s=r(92026),a=r(92975),p=r(81753),l=r(83406),u=r(6908),c=r(47615),d=r(63543),y=r(52410),f=r(85249),g=r(78952);const m=i.Z.getLogger("esri.layers.graphics.sources.ogcfeature"),h="http://www.opengis.net/def/crs/",b=`${h}OGC/1.3/CRS84`;async function w(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:5;const{links:a}=e,p=P(a,"items","application/geo+json")||P(a,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.Wi)(p))throw new o.Z("ogc-feature-layer:missing-items-page","Missing items url");const{data:l}=await(0,n.default)(p.href,{signal:r.signal,query:{limit:i,...r.customParameters,token:r.apiKey},headers:{accept:"application/geo+json"}});await(0,c.O3)(l);const u=(0,c.my)(l,{geometryType:t.geometryType}),g=t.fields||u.fields||[],h=null!=t.hasZ?t.hasZ:u.hasZ,b=u.geometryType,w=t.objectIdField||u.objectIdFieldName||"OBJECTID";let v=t.timeInfo;const S=g.find((e=>e.name===w));if(S)S.type="esriFieldTypeOID",S.editable=!1,S.nullable=!1;else{if(!u.objectIdFieldType)throw new o.Z("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");g.unshift({name:w,alias:w,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(w!==u.objectIdFieldName){const e=g.find((e=>e.name===u.objectIdFieldName));e&&(e.type="esriFieldTypeInteger")}g===u.fields&&u.unknownFields.length>0&&m.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:u.unknownFields}});for(const n of g){if(null==n.name&&(n.name=n.alias),null==n.alias&&(n.alias=n.name),"esriFieldTypeOID"!==n.type&&"esriFieldTypeGlobalID"!==n.type&&(n.editable=null==n.editable||!!n.editable,n.nullable=null==n.nullable||!!n.nullable),!n.name)throw new o.Z("ogc-feature-layer:invalid-field-name","field name is missing",{field:n});if(!f.v.jsonValues.includes(n.type))throw new o.Z("ogc-feature-layer:invalid-field-type",`invalid type for field "${n.name}"`,{field:n})}if(v){const e=new y.Z(g);if(v.startTimeField){const t=e.get(v.startTimeField);t?(v.startTimeField=t.name,t.type="esriFieldTypeDate"):v.startTimeField=null}if(v.endTimeField){const t=e.get(v.endTimeField);t?(v.endTimeField=t.name,t.type="esriFieldTypeDate"):v.endTimeField=null}if(v.trackIdField){const t=e.get(v.trackIdField);t?v.trackIdField=t.name:(v.trackIdField=null,m.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:v}}))}v.startTimeField||v.endTimeField||(m.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:v}}),v=null)}return{drawingInfo:b?(0,d.bU)(b):null,geometryType:b,fields:g,hasZ:!!h,objectIdField:w,timeInfo:v}}async function v(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:r}=e,i=P(r,"data","application/json")||P(r,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if((0,s.Wi)(i))throw new o.Z("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:a,customParameters:p,signal:l}=t,{data:u}=await(0,n.default)(i.href,{signal:l,headers:{accept:"application/json"},query:{...p,token:a}});return u}async function S(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{links:r}=e,i=P(r,"conformance","application/json")||P(r,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if((0,s.Wi)(i))throw new o.Z("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:a,customParameters:p,signal:l}=t,{data:u}=await(0,n.default)(i.href,{signal:l,headers:{accept:"application/json"},query:{...p,token:a}});return u}async function C(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{apiKey:r,customParameters:o,signal:i}=t,{data:s}=await(0,n.default)(e,{signal:i,headers:{accept:"application/json"},query:{...o,token:r}});return s}async function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const r="application/vnd.oai.openapi+json;version=3.0",o=P(e.links,"service-desc",r);if((0,s.Wi)(o))return m.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:i,customParameters:a,signal:p}=t,{data:l}=await(0,n.default)(o.href,{signal:p,headers:{accept:r},query:{...a,token:i}});return l}function I(e){const t=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e)?.groups;if(!t)return null;const{authority:r,code:n}=t;switch(r.toLowerCase()){case"ogc":switch(n.toLowerCase()){case"crs27":return g.Z.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return g.Z.WGS84.wkid;default:return null}case"esri":case"epsg":{const e=Number.parseInt(n,10);return Number.isNaN(e)?null:e}default:return null}}async function T(e,t,r){const n=await j(e,t,r);return(0,l.cn)(n)}async function j(e,t,r){const{capabilities:{query:{maxRecordCount:i}},collection:d,layerDefinition:y,queryParameters:{apiKey:f,customParameters:m},spatialReference:h,supportedCrs:b}=e,{links:w}=d,v=P(w,"items","application/geo+json")||P(w,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if((0,s.Wi)(v))throw new o.Z("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:S,num:C,start:F,timeExtent:I,where:T}=t;if(t.objectIds)throw new o.Z("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const j=g.Z.fromJSON(h),_=(0,s.Pt)(t.outSpatialReference,j),R=_.isWGS84?null:x(_,b),Z=O(S,b),D=function(e){if((0,s.Wi)(e))return null;const{start:t,end:r}=e;return`${(0,s.pC)(t)?t.toISOString():".."}/${(0,s.pC)(r)?r.toISOString():".."}`}(I),k=(q=T,(0,s.Wi)(q)||!q||"1=1"===q?null:q),G=C??(null!=F&&void 0!==F?10:i),{data:M}=await(0,n.default)(v.href,{...r,query:{...m,...Z,crs:R,datetime:D,query:k,limit:G,startindex:F,token:f},headers:{accept:"application/geo+json"}});var q;let E=!1;if(M.links){E=!!M.links.find((e=>"next"===e.rel))}!E&&Number.isInteger(M.numberMatched)&&Number.isInteger(M.numberReturned)&&(E=M.numberReturned<M.numberMatched);const{fields:N,globalIdField:$,hasM:A,hasZ:W,objectIdField:Q}=y,L=y.geometryType,B=(0,c.lG)(M,{geometryType:L,hasZ:W,objectIdField:Q});if(!R&&_.isWebMercator)for(const n of B)if((0,s.pC)(n.geometry)){const e=(0,l.di)(n.geometry,L,W,!1);e.spatialReference=g.Z.WGS84,n.geometry=(0,l.GH)((0,p.iV)(e,_))}for(const n of B)n.objectId=n.attributes[Q];const H=R||!R&&_.isWebMercator?_.toJSON():a.Zn,J=new u.Z;return J.exceededTransferLimit=E,J.features=B,J.fields=N,J.geometryType=L,J.globalIdFieldName=$,J.hasM=A,J.hasZ=W,J.objectIdFieldName=Q,J.spatialReference=H,J}function x(e,t){const{isWebMercator:r,wkid:n}=e;if(!n)return null;const o=r?t[3857]??t[102100]??t[102113]??t[900913]:t[e.wkid];return o?`${h}${o}`:null}function _(e){if((0,s.Wi)(e))return"";const{xmin:t,ymin:r,xmax:n,ymax:o}=e;return`${t},${r},${n},${o}`}function O(e,t){if(!function(e){return(0,s.pC)(e)&&"extent"===e.type}(e))return null;const{spatialReference:r}=e;if(!r||r.isWGS84)return{bbox:_(e)};const n=x(r,t);return(0,s.pC)(n)?{bbox:_(e),"bbox-crs":n}:r.isWebMercator?{bbox:_((0,p.iV)(e,g.Z.WGS84))}:null}function P(e,t,r){return e.find((e=>e.rel===t&&e.type===r))||e.find((e=>e.rel===t&&!e.type))}}}]);
//# sourceMappingURL=8701.191d1bac.chunk.js.map