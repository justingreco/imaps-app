"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8566],{38566:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var i=r(27366),s=(r(59486),r(44055)),o=(r(94931),r(78451),r(98689),r(57823),r(32066),r(49018),r(34999),r(79850),r(9014),r(40464)),n=r(92026),a=r(97642),p=r(18202),l=r(35995),u=r(49861),d=(r(63780),r(93169)),y=r(25243),c=r(69912),h=r(31201),m=r(27823),f=r(30651),g=r(10064),b=r(41691),v=r(54472),w=r(66978),C=r(31009),F=r(63543),_=r(12622),S=r(49818),O=r(53866);let I=class extends((0,b.p)(v.Z)){constructor(){super(...arguments),this.capabilities=(0,F.MS)(!1,!1),this.type="wfs",this.refresh=(0,w.Ds)((async e=>{await this.load();const{extent:t}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}}))}load(e){const t=((0,n.pC)(e)&&e.signal)??null;return this.addResolvingPromise(this._startWorker({signal:t})),Promise.resolve(this)}destroy(){this._connection?.close(),this._connection=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const r=await this._connection.invoke("queryFeatures",e?e.toJSON():null,t);return S.default.fromJSON(r)}async queryFeaturesJSON(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("queryFeatures",e?e.toJSON():null,t)}async queryFeatureCount(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}async queryObjectIds(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}async queryExtent(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};await this.load(t);const r=await this._connection.invoke("queryExtent",e?e.toJSON():null,t);return{count:r.count,extent:O.Z.fromJSON(r.extent)}}async querySnapping(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return await this.load(t),this._connection.invoke("querySnapping",e,t)}async _createLoadOptions(e){const{url:t,customParameters:r,name:i,namespaceUri:s,spatialReference:o,fields:a,geometryType:p,swapXY:l}=this.layer;if(!t)throw new g.Z("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await(0,_.FU)(t,{customParameters:r,...e}));const u=["fields","geometryType","name","namespaceUri","spatialReference","swapXY"].some((e=>null==this.layer[e])),d=u?await(0,_.be)(this.wfsCapabilities,i,s,{spatialReference:o,customParameters:r,signal:e?.signal}):{...(0,_.eB)(a),geometryType:p,name:i,namespaceUri:s,spatialReference:o,swapXY:l},y=(0,n.Wg)((0,_.ft)(this.wfsCapabilities.readFeatureTypes(),d.name,d.namespaceUri)),c=m.Mk.toJSON(d.geometryType);return{customParameters:r,featureType:y,fields:d.fields.map((e=>e.toJSON())),geometryField:d.geometryField,geometryType:c,getFeatureUrl:this.wfsCapabilities.operations.GetFeature.url,getFeatureOutputFormat:this.wfsCapabilities.operations.GetFeature.outputFormat,objectIdField:d.objectIdField,spatialReference:d.spatialReference.toJSON(),swapXY:d.swapXY}}async _startWorker(e){const[t,r]=await(0,w.as)([this._createLoadOptions(e),(0,C.bA)("WFSSourceWorker",{...e,strategy:(0,d.Z)("feature-layers-workers")?"dedicated":"local"})]),i=t.error||r.error||null,s=r.value||null;if(i)throw s&&s.close(),i;const o=t.value;this._connection=r.value;const{extent:n}=await this._connection.invoke("load",o,e);this.sourceJSON={extent:n,fields:o.fields,geometryType:o.geometryType,objectIdField:o.objectIdField,geometryField:o.geometryField,drawingInfo:(0,F.bU)(o.geometryType),name:o.featureType.title,wfsInfo:{name:o.featureType.name,featureUrl:o.getFeatureUrl,maxFeatures:3e3,swapXY:o.swapXY,supportedSpatialReferences:o.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:o.featureType.namespaceUri}}}};(0,i._)([(0,u.Cb)()],I.prototype,"capabilities",void 0),(0,i._)([(0,u.Cb)({constructOnly:!0})],I.prototype,"layer",void 0),(0,i._)([(0,u.Cb)()],I.prototype,"sourceJSON",void 0),(0,i._)([(0,u.Cb)()],I.prototype,"type",void 0),(0,i._)([(0,u.Cb)()],I.prototype,"wfsCapabilities",void 0),I=(0,i._)([(0,c.j)("esri.layers.graphics.sources.WFSSource")],I);var R,x=r(6693),T=r(46671),q=r(7632),P=r(6061),j=r(94207),U=r(29598),E=r(71684),N=r(56811),k=r(99063),Z=r(45948),D=r(39042),Q=r(83040),J=r(25610),M=r(37270),W=r(77748),A=r(85116),Y=r(21149),G=r(81085),X=r(78952);const B=(0,J.v)();let $=R=class extends((0,j.c)((0,T.N)((0,q.b)((0,x.h)((0,k.n)((0,E.Q)((0,N.M)((0,P.q)((0,U.I)((0,a.R)(f.Z))))))))))){constructor(e){super(e),this.capabilities=null,this.copyright=null,this.customParameters=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxFeatures=3e3,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new I({layer:this}),this.spatialReference=X.Z.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}static fromWFSLayerInfo(e){const{customParameters:t,fields:r,geometryField:i,geometryType:s,name:o,namespaceUri:n,objectIdField:a,spatialReference:p,swapXY:l,url:u,wfsCapabilities:d}=e;return new R({customParameters:t,fields:r,geometryField:i,geometryType:s,name:o,namespaceUri:n,objectIdField:a,spatialReference:p,swapXY:l,url:u,wfsCapabilities:d})}destroy(){this.source?.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then((()=>this.source.load(e))).then((()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),(0,M.YN)(this.renderer,this.fieldsIndex),(0,M.UF)(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,t,r){const i=e.filter((e=>e.name!==_.M8));this.geometryField&&i.unshift(new Q.Z({name:this.geometryField,alias:this.geometryField,type:"geometry"})),(0,p.RB)(r,i.map((e=>e.toJSON())),t)}get parsedUrl(){return this.url?(0,l.mN)(this.url):null}set renderer(e){(0,M.YN)(e,this.fieldsIndex),this._set("renderer",e)}createPopupTemplate(e){return(0,G.eZ)(this,e)}createQuery(){const e=new Y.Z;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:t,timeExtent:r}=this;return e.timeExtent=null!=t&&null!=r?r.offset(-t.value,t.unit):r||null,e}getFieldDomain(e,t){return this.getField(e)?.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then((()=>this.source.queryFeatures(Y.Z.from(e)||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this.load().then((()=>this.source.queryObjectIds(Y.Z.from(e)||this.createQuery(),t)))}queryFeatureCount(e,t){return this.load().then((()=>this.source.queryFeatureCount(Y.Z.from(e)||this.createQuery(),t)))}queryExtent(e,t){return this.load().then((()=>this.source.queryExtent(Y.Z.from(e)||this.createQuery(),t)))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return(0,n.pC)(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};(0,i._)([(0,u.Cb)({readOnly:!0,aliasOf:"source.capabilities"})],$.prototype,"capabilities",void 0),(0,i._)([(0,u.Cb)({type:String})],$.prototype,"copyright",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],$.prototype,"createQueryVersion",null),(0,i._)([(0,u.Cb)({json:{name:"wfsInfo.customParameters",write:{ignoreOrigin:!0}}})],$.prototype,"customParameters",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],$.prototype,"defaultPopupTemplate",null),(0,i._)([(0,u.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],$.prototype,"definitionExpression",void 0),(0,i._)([(0,u.Cb)({type:String})],$.prototype,"displayField",void 0),(0,i._)([(0,u.Cb)(Z.PV)],$.prototype,"elevationInfo",void 0),(0,i._)([(0,u.Cb)(D.d)],$.prototype,"featureReduction",void 0),(0,i._)([(0,u.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],$.prototype,"featureUrl",void 0),(0,i._)([(0,u.Cb)({type:[Q.Z],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],$.prototype,"fields",void 0),(0,i._)([(0,h.c)("fields")],$.prototype,"writeFields",null),(0,i._)([(0,u.Cb)(B.fieldsIndex)],$.prototype,"fieldsIndex",void 0),(0,i._)([(0,u.Cb)({type:O.Z,json:{name:"extent"}})],$.prototype,"fullExtent",void 0),(0,i._)([(0,u.Cb)()],$.prototype,"geometryField",void 0),(0,i._)([(0,u.Cb)({type:String,json:{read:{source:"layerDefinition.geometryType",reader:m.Mk.read},write:{target:"layerDefinition.geometryType",writer:m.Mk.write,ignoreOrigin:!0},origins:{service:{read:m.Mk.read}}}})],$.prototype,"geometryType",void 0),(0,i._)([(0,u.Cb)({type:String})],$.prototype,"id",void 0),(0,i._)([(0,u.Cb)(Z.iR)],$.prototype,"labelsVisible",void 0),(0,i._)([(0,u.Cb)({type:[W.Z],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:A.r},write:!0}})],$.prototype,"labelingInfo",void 0),(0,i._)([(0,u.Cb)(Z.rn)],$.prototype,"legendEnabled",void 0),(0,i._)([(0,u.Cb)({type:["show","hide"]})],$.prototype,"listMode",void 0),(0,i._)([(0,u.Cb)({type:String})],$.prototype,"objectIdField",void 0),(0,i._)([(0,u.Cb)({type:["WFS"]})],$.prototype,"operationalLayerType",void 0),(0,i._)([(0,u.Cb)({type:y.z8,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],$.prototype,"maxFeatures",void 0),(0,i._)([(0,u.Cb)({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],$.prototype,"mode",void 0),(0,i._)([(0,u.Cb)({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],$.prototype,"name",void 0),(0,i._)([(0,u.Cb)({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],$.prototype,"namespaceUri",void 0),(0,i._)([(0,u.Cb)(Z.bT)],$.prototype,"opacity",void 0),(0,i._)([(0,u.Cb)(B.outFields)],$.prototype,"outFields",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],$.prototype,"parsedUrl",null),(0,i._)([(0,u.Cb)(Z.C_)],$.prototype,"popupEnabled",void 0),(0,i._)([(0,u.Cb)({type:s.Z,json:{name:"popupInfo",write:!0}})],$.prototype,"popupTemplate",void 0),(0,i._)([(0,u.Cb)({types:o.A,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:o.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],$.prototype,"renderer",null),(0,i._)([(0,u.Cb)(Z.YI)],$.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,u.Cb)({readOnly:!0})],$.prototype,"source",void 0),(0,i._)([(0,u.Cb)({type:X.Z,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],$.prototype,"spatialReference",void 0),(0,i._)([(0,u.Cb)({readOnly:!0,type:[y.z8],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],$.prototype,"spatialReferences",void 0),(0,i._)([(0,u.Cb)({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],$.prototype,"swapXY",void 0),(0,i._)([(0,u.Cb)({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],$.prototype,"title",void 0),(0,i._)([(0,u.Cb)({json:{read:!1},readOnly:!0})],$.prototype,"type",void 0),(0,i._)([(0,u.Cb)(Z.HQ)],$.prototype,"url",void 0),(0,i._)([(0,u.Cb)({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],$.prototype,"version",void 0),(0,i._)([(0,u.Cb)({aliasOf:"source.wfsCapabilities"})],$.prototype,"wfsCapabilities",void 0),$=R=(0,i._)([(0,c.j)("esri.layers.WFSLayer")],$);const z=$},60480:(e,t,r)=>{r.d(t,{g:()=>i});const i={supportsStatistics:!0,supportsPercentileStatistics:!0,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsTopFeaturesQuery:!1,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,supportsDefaultSpatialReference:!1,supportsCompactGeometry:!1,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}},63543:(e,t,r)=>{r.d(t,{Dm:()=>u,Hq:()=>d,MS:()=>y,bU:()=>a});var i=r(93169),s=r(84652),o=r(60480),n=r(76115);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?n.I4:"esriGeometryPolyline"===e?n.ET:n.lF}}}const p=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function u(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let r=`this.${t} = null;`;for(const t in e)r+=`this${p.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new i}catch(r){return()=>({[t]:null,...e})}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return[{name:"New Feature",description:"",prototype:{attributes:(0,s.d9)(e)}}]}function y(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:o.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=8566.05efd83c.chunk.js.map