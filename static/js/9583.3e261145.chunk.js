"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[9583],{19583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>V});var s=r(27366),i=r(76200),a=r(62044),o=r(10064),n=r(41691),l=r(93002),y=r(92026),p=r(97642),h=r(66978),c=r(49861),u=(r(63780),r(25243)),m=r(38511),d=r(69912),b=r(31201),g=r(25265),f=r(53866),v=r(82582),S=r(30651),_=r(27961),x=r(6741),C=r(11936),O=r(6693),I=r(46671),w=r(6061),L=r(29598),E=r(71684),P=r(56811),D=r(18870),N=r(99063),M=r(45948),T=r(44041),J=r(77990),R=r(58132),j=r(26704);let F=class extends((0,O.h)((0,N.n)((0,P.M)((0,D.x)((0,x.O)((0,C.Y)((0,w.q)((0,L.I)((0,p.R)((0,E.Q)((0,_.V)((0,I.N)((0,n.p)(S.Z)))))))))))))){constructor(){super(...arguments),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=(0,y.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(h.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray();let a=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const e=(0,g.M9)(s.origin);if(e===g.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;a=(0,R.QV)(i,e,g.s3.SERVICE)}else if(e>g.s3.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");a=(0,R.QV)(i,e.sublayers,(0,g.M9)(e.origin))}}const o=[],n={writeSublayerStructure:a,...s};let l=a;i.forEach((e=>{const t=e.write({},n);o.push(t),l=l||"user"===e.originOf("visible")})),o.some((e=>Object.keys(e).length>1))&&(t.layers=o),l&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const i=s&&s.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const a=new T.R({layer:this,floors:s?.floors,scale:(0,v.yZ)({extent:e,width:t})*i}),o=a.toJSON();a.destroy();const n=!s||!s.rotation||this.version<10.3?{}:{rotation:-s.rotation},l=e&&e.spatialReference,y=l.wkid||JSON.stringify(l.toJSON());o.dpi*=i;const p={};if(s?.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();p.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(p.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:t+","+r,...o,...n,...p}}async fetchImage(e,t,r,s){return this._fetchImage("image",e,t,r,s)}async fetchImageBitmap(e,t,r,s){const i=await this._fetchImage("blob",e,t,r,s);return createImageBitmap(i)}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:t}=await(0,i.default)(this.url,e),{extent:r,fullExtent:s,timeExtent:o}=t,n=r||s;return{fullExtent:n&&f.Z.fromJSON(n),timeExtent:o&&a.Z.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,l.G)(this,(e=>{e(this.allSublayers)}))}serviceSupportsSpatialReference(e){return(0,j.D)(this,e)}async _fetchImage(e,t,r,s,a){const n={responseType:e,signal:a?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,s,a),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},l=this.parsedUrl.path+"/export";if(null!=n.query.dynamicLayers&&!this.capabilities.exportMap.supportsDynamicLayers)throw new o.Z("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:e}=await(0,i.default)(l,n);return e}catch(y){if((0,h.D_)(y))throw y;throw new o.Z("mapimagelayer:image-fetch-error",`Unable to load image: ${l}`,{error:y})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,i.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};(0,s._)([(0,c.Cb)({type:Boolean})],F.prototype,"datesInUnknownTimezone",void 0),(0,s._)([(0,c.Cb)()],F.prototype,"dpi",void 0),(0,s._)([(0,c.Cb)()],F.prototype,"gdbVersion",void 0),(0,s._)([(0,c.Cb)()],F.prototype,"imageFormat",void 0),(0,s._)([(0,m.r)("imageFormat",["supportedImageFormatTypes"])],F.prototype,"readImageFormat",null),(0,s._)([(0,c.Cb)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],F.prototype,"imageMaxHeight",void 0),(0,s._)([(0,c.Cb)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],F.prototype,"imageMaxWidth",void 0),(0,s._)([(0,c.Cb)()],F.prototype,"imageTransparency",void 0),(0,s._)([(0,c.Cb)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],F.prototype,"isReference",void 0),(0,s._)([(0,c.Cb)({json:{read:!1,write:!1}})],F.prototype,"labelsVisible",void 0),(0,s._)([(0,c.Cb)({type:["ArcGISMapServiceLayer"]})],F.prototype,"operationalLayerType",void 0),(0,s._)([(0,c.Cb)({json:{read:!1,write:!1}})],F.prototype,"popupEnabled",void 0),(0,s._)([(0,c.Cb)()],F.prototype,"sourceJSON",void 0),(0,s._)([(0,c.Cb)({json:{write:{ignoreOrigin:!0}}})],F.prototype,"sublayers",void 0),(0,s._)([(0,b.c)("sublayers",{layers:{type:[J.Z]},visibleLayers:{type:[u.z8]}})],F.prototype,"writeSublayers",null),(0,s._)([(0,c.Cb)({type:["show","hide","hide-children"]})],F.prototype,"listMode",void 0),(0,s._)([(0,c.Cb)({json:{read:!1},readOnly:!0,value:"map-image"})],F.prototype,"type",void 0),(0,s._)([(0,c.Cb)(M.HQ)],F.prototype,"url",void 0),F=(0,s._)([(0,d.j)("esri.layers.MapImageLayer")],F);const V=F},44041:(e,t,r)=>{r.d(t,{R:()=>m});var s=r(27366),i=r(85015),a=r(41691),o=r(92026),n=r(76672),l=r(49861),y=(r(63780),r(25243),r(69912)),p=r(45948),h=r(87072),c=r(58132);const u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let m=class extends((0,a.p)(i.Z)){constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,h.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,c.FN)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.handles.remove("layer"),e&&this.handles.add([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(u[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=(0,h.f)(this.floors,t),s=(0,n._)(r,t.definitionExpression);return(0,o.pC)(s)&&(e[t.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers"),this.commitProperty("timeExtent");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=t=>{const s=this.scale,i=0===s,a=0===t.minScale||s<=t.minScale,o=0===t.maxScale||s>=t.maxScale;t.visible&&(i||a&&o)&&(t.sublayers?t.sublayers.forEach(r):e.unshift(t))};t&&t.forEach(r);const s=this._get("visibleSublayers");return!s||s.length!==e.length||s.some(((t,r)=>e[r]!==t))?e:s}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"dynamicLayers",null),(0,s._)([(0,l.Cb)()],m.prototype,"floors",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"hasDynamicLayers",null),(0,s._)([(0,l.Cb)()],m.prototype,"layer",null),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"layers",null),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"layerDefs",null),(0,s._)([(0,l.Cb)({type:Number})],m.prototype,"scale",void 0),(0,s._)([(0,l.Cb)(p.qG)],m.prototype,"timeExtent",void 0),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"version",null),(0,s._)([(0,l.Cb)({readOnly:!0})],m.prototype,"visibleSublayers",null),m=(0,s._)([(0,y.j)("esri.layers.mixins.ExportImageParameters")],m)}}]);
//# sourceMappingURL=9583.3e261145.chunk.js.map