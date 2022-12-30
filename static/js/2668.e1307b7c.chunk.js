"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[2668],{2668:(e,t,i)=>{i.r(t),i.d(t,{default:()=>K});var r,o=i(27366),n=(i(59486),i(44055)),s=(i(94931),i(78451),i(98689),i(57823),i(32066),i(49018),i(34999)),a=i(28189),l=i(9014),p=i(40464),d=i(76200),y=i(51508),c=i(10064),u=i(32718),h=i(92026),m=i(97642),f=i(66978),b=i(49861),g=(i(63780),i(25243)),v=i(38511),w=i(69912),_=i(47492),I=i(27823),C=i(30651),S=i(11936),x=i(6693),R=i(46671),T=i(7632),j=i(64390),P=i(6061),F=i(29598),N=i(71684),O=i(56811),Z=i(99063),k=i(45948),D=i(25610),E=i(37270),A=i(77748),U=i(85116),J=i(46784);let L=r=class extends J.wq{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new r({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,o._)([(0,b.Cb)({type:Number,json:{write:!0}})],L.prototype,"age",void 0),(0,o._)([(0,b.Cb)({type:Number,json:{write:!0}})],L.prototype,"ageReceived",void 0),(0,o._)([(0,b.Cb)({type:Number,json:{write:!0}})],L.prototype,"displayCount",void 0),(0,o._)([(0,b.Cb)({type:Number,json:{write:!0}})],L.prototype,"maxObservations",void 0),L=r=(0,o._)([(0,w.j)("esri.layers.support.PurgeOptions")],L);const M=L;var q=i(21371),z=i(21149),G=i(81085),Q=i(64575),V=i(78952),Y=i(53866);const W=(0,D.v)();let H=class extends((0,j.M)((0,T.b)((0,x.h)((0,Z.n)((0,O.M)((0,N.Q)((0,S.Y)((0,P.q)((0,F.I)((0,m.R)((0,R.N)(C.Z)))))))))))){constructor(){super(...arguments),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new M,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=V.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in globalThis))return this.addResolvingPromise(Promise.reject(new c.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,h.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(f.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}set renderer(e){(0,E.YN)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,i){const r=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(r){const e=(0,l.a)(r,t,i)||void 0;return e||u.Z.getLogger(this.declaredClass).error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:i}),e}if(t.defaultSymbol)return t.types&&t.types.length?new a.Z({defaultSymbol:B(t.defaultSymbol,t,i),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:B(e.symbol,e,i)})))}):new s.Z({symbol:B(t.defaultSymbol,t,i)})}async connect(e){const[{createConnection:t}]=await Promise.all([i.e(296).then(i.bind(i,80296)),this.load()]),r=I.Mk.toJSON(this.geometryType),{customParameters:o=null,definitionExpression:n=null,geometryDefinition:s=null,maxReconnectionAttempts:a=0,maxReconnectionInterval:l=20,spatialReference:p=this.spatialReference}=e||this.createConnectionParameters();return t(this.parsedUrl,this.spatialReference,p,r,{geometry:s,where:n},a,l,o)}createConnectionParameters(){return{spatialReference:this.spatialReference,customParameters:this.customParameters,definitionExpression:this.definitionExpression,geometryDefinition:this.geometryDefinition,maxReconnectionAttempts:this.maxReconnectionAttempts,maxReconnectionInterval:this.maxReconnectionInterval}}createPopupTemplate(e){return(0,G.eZ)(this,e)}createQuery(){const e=new z.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let i=null;return this.fields.some((t=>(t.name===e&&(i=t.domain),!!i))),i}getField(e){return this.fieldsIndex.get(e)}serviceSupportsSpatialReference(e){return!0}async _fetchService(e){if(this.webSocketUrl){if(!this.timeInfo?.trackIdField)throw new c.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new c.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new c.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new c.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await(0,d.default)(this.parsedUrl.path,{query:{f:"json",...this.customParameters,...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...this.sourceJSON??{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,E.YN)(this.renderer,this.fieldsIndex),(0,E.UF)(this.timeInfo,this.fieldsIndex),(0,q.y)(this,{origin:"service"})}};(0,o._)([(0,b.Cb)({type:String})],H.prototype,"copyright",void 0),(0,o._)([(0,b.Cb)({readOnly:!0})],H.prototype,"defaultPopupTemplate",null),(0,o._)([(0,b.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],H.prototype,"definitionExpression",void 0),(0,o._)([(0,b.Cb)({type:String})],H.prototype,"displayField",void 0),(0,o._)([(0,b.Cb)({type:Q.Z})],H.prototype,"elevationInfo",void 0),(0,o._)([(0,b.Cb)(W.fields)],H.prototype,"fields",void 0),(0,o._)([(0,b.Cb)(W.fieldsIndex)],H.prototype,"fieldsIndex",void 0),(0,o._)([(0,b.Cb)({type:Y.Z})],H.prototype,"geometryDefinition",void 0),(0,o._)([(0,b.Cb)({type:I.Mk.apiValues,json:{read:{reader:I.Mk.read}}})],H.prototype,"geometryType",void 0),(0,o._)([(0,b.Cb)(k.iR)],H.prototype,"labelsVisible",void 0),(0,o._)([(0,b.Cb)({type:[A.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:U.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],H.prototype,"labelingInfo",void 0),(0,o._)([(0,b.Cb)(k.rn)],H.prototype,"legendEnabled",void 0),(0,o._)([(0,b.Cb)({type:["show","hide"]})],H.prototype,"listMode",void 0),(0,o._)([(0,b.Cb)({type:g.z8})],H.prototype,"maxReconnectionAttempts",void 0),(0,o._)([(0,b.Cb)({type:g.z8})],H.prototype,"maxReconnectionInterval",void 0),(0,o._)([(0,b.Cb)(k.u1)],H.prototype,"maxScale",void 0),(0,o._)([(0,b.Cb)(k.rO)],H.prototype,"minScale",void 0),(0,o._)([(0,b.Cb)({type:String})],H.prototype,"objectIdField",void 0),(0,o._)([(0,b.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],H.prototype,"operationalLayerType",void 0),(0,o._)([(0,b.Cb)(k.C_)],H.prototype,"popupEnabled",void 0),(0,o._)([(0,b.Cb)({type:n.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],H.prototype,"popupTemplate",void 0),(0,o._)([(0,b.Cb)({type:M})],H.prototype,"purgeOptions",void 0),(0,o._)([(0,b.Cb)({types:p.A,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}},"web-scene":{name:"layerDefinition.drawingInfo.renderer",types:p.o,write:!0}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],H.prototype,"renderer",null),(0,o._)([(0,v.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,v.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],H.prototype,"readRenderer",null),(0,o._)([(0,b.Cb)(k.YI)],H.prototype,"screenSizePerspectiveEnabled",void 0),(0,o._)([(0,b.Cb)()],H.prototype,"sourceJSON",void 0),(0,o._)([(0,b.Cb)({type:V.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],H.prototype,"spatialReference",void 0),(0,o._)([(0,b.Cb)({json:{read:!1}})],H.prototype,"type",void 0),(0,o._)([(0,b.Cb)(k.HQ)],H.prototype,"url",void 0),(0,o._)([(0,b.Cb)({type:Number})],H.prototype,"updateInterval",void 0),(0,o._)([(0,b.Cb)({type:String})],H.prototype,"webSocketUrl",void 0),H=(0,o._)([(0,w.j)("esri.layers.StreamLayer")],H);const B=(0,_.d)({types:y.QT}),K=H}}]);
//# sourceMappingURL=2668.e1307b7c.chunk.js.map