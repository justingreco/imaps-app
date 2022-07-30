"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[3838],{13838:(e,t,r)=>{r.r(t),r.d(t,{default:()=>T});var s,l=r(27366),o=(r(59486),r(40281)),i=r(77178),n=r(92026),a=r(97642),u=r(66978),y=r(94172),p=r(35995),h=r(49861),f=(r(63780),r(93169),r(25243)),d=r(38511),c=r(69912),b=r(31201),v=r(78952),m=r(30651),g=r(6693),S=r(6061),_=r(29598),C=r(71684),w=r(56811),k=r(45948),E=r(91505),x=r(46784),I=r(54472),P=r(643),G=r(89125),O=r(21857),L=r(53866);let F=s=class extends(E.Z.EventedMixin((0,x.eC)(I.Z))){constructor(){super(...arguments),this._sublayersHandles=null,this.description=null,this.id=null,this.networkLink=null,this.title=null,this.sourceJSON=null,this.fullExtent=null}initialize(){(0,y.N1)((()=>this.networkLink)).then((()=>(0,y.N1)((()=>!0===this.visible)))).then((()=>this.load()))}load(e){if(!this.networkLink)return;if(this.networkLink.viewFormat)return;const t=(0,n.pC)(e)?e.signal:null,r=this._fetchService(this._get("networkLink").href,t).then((e=>{const t=(0,O.lm)(e.sublayers);this.fullExtent=L.Z.fromJSON(t),this.sourceJSON=e;const r=(0,f.se)(o.Z.ofType(s),(0,O.j5)(s,e));this.sublayers?this.sublayers.addMany(r):this.sublayers=r,this.layer.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(r),Promise.resolve(this)}set sublayers(e){const t=this._get("sublayers");t&&(t.forEach((e=>{e.parent=null,e.layer=null})),this._sublayersHandles.forEach((e=>e.remove())),this._sublayersHandles=null),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this._sublayersHandles=[e.on("after-add",(e=>{let{item:t}=e;t.parent=this,t.layer=this.layer})),e.on("after-remove",(e=>{let{item:t}=e;t.parent=null,t.layer=null}))]),this._set("sublayers",e)}castSublayers(e){return(0,f.se)(o.Z.ofType(s),e)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((t=>t.layer=e))}_fetchService(e,t){return(0,O.CS)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((e=>(0,O.Cw)(e.data)))}};(0,l._)([(0,h.Cb)()],F.prototype,"description",void 0),(0,l._)([(0,h.Cb)()],F.prototype,"id",void 0),(0,l._)([(0,h.Cb)({readOnly:!0,value:null})],F.prototype,"networkLink",void 0),(0,l._)([(0,h.Cb)({json:{write:{allowNull:!0}}})],F.prototype,"parent",void 0),(0,l._)([(0,h.Cb)({value:null,json:{write:{allowNull:!0}}})],F.prototype,"sublayers",null),(0,l._)([(0,G.p)("sublayers")],F.prototype,"castSublayers",null),(0,l._)([(0,h.Cb)({value:null,json:{read:{source:"name",reader:e=>(0,P.Cb)(e)}}})],F.prototype,"title",void 0),(0,l._)([(0,h.Cb)({value:!0})],F.prototype,"visible",null),(0,l._)([(0,d.r)("visible",["visibility"])],F.prototype,"readVisible",null),(0,l._)([(0,h.Cb)()],F.prototype,"sourceJSON",void 0),(0,l._)([(0,h.Cb)({value:null})],F.prototype,"layer",null),(0,l._)([(0,h.Cb)({type:L.Z})],F.prototype,"fullExtent",void 0),F=s=(0,l._)([(0,c.j)("esri.layers.support.KMLSublayer")],F);const M=F,Z=["kml","xml"];let j=class extends((0,g.h)((0,C.Q)((0,w.M)((0,S.q)((0,_.I)((0,a.R)(m.Z))))))){constructor(){super(...arguments),this._visibleFolders=[],this.allSublayers=new i.Z({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.outSpatialReference=v.Z.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.own([(0,y.YP)((()=>this.sublayers),((e,t)=>{t&&t.forEach((e=>{e.parent=null,e.layer=null})),e&&e.forEach((e=>{e.parent=this,e.layer=this}))}),y.Z_),this.on("sublayer-update",(()=>this.notifyChange("fullExtent")))])}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,r){return(0,O.j5)(M,t,r,this._visibleFolders)}writeSublayers(e,t){const r=[],s=e.toArray();for(;s.length;){const e=s[0];e.networkLink||(e.visible&&r.push(e.id),e.sublayers&&s.push(...e.sublayers.toArray())),s.shift()}t.visibleFolders=r}get title(){const e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,p.vt)(this.url,Z)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],r=e=>{e.visible&&(t.push(e),e.sublayers&&e.sublayers.forEach(r))};return e&&e.forEach(r),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=(0,n.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(u.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then((()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:(0,O.CS)(this.url,this.outSpatialReference,this.refreshInterval,e))),r=(0,O.Cw)(t.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;(0,n.pC)(this.extent)&&(e=this.extent.clone());const t=r=>{if(r.sublayers)for(const s of r.sublayers.items)t(s),s.visible&&s.fullExtent&&((0,n.pC)(e)?e.union(s.fullExtent):e=s.fullExtent.clone())};return t(this),e}};(0,l._)([(0,h.Cb)({readOnly:!0})],j.prototype,"allSublayers",void 0),(0,l._)([(0,h.Cb)({type:v.Z})],j.prototype,"outSpatialReference",void 0),(0,l._)([(0,h.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],j.prototype,"path",void 0),(0,l._)([(0,h.Cb)({readOnly:!0,json:{read:!1,write:!1}})],j.prototype,"legendEnabled",void 0),(0,l._)([(0,h.Cb)({type:["show","hide","hide-children"]})],j.prototype,"listMode",void 0),(0,l._)([(0,h.Cb)({type:["KML"]})],j.prototype,"operationalLayerType",void 0),(0,l._)([(0,h.Cb)({})],j.prototype,"resourceInfo",void 0),(0,l._)([(0,h.Cb)({type:o.Z.ofType(M),json:{write:{ignoreOrigin:!0}}})],j.prototype,"sublayers",void 0),(0,l._)([(0,d.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],j.prototype,"readSublayersFromItemOrWebMap",null),(0,l._)([(0,d.r)("service","sublayers",["sublayers"])],j.prototype,"readSublayers",null),(0,l._)([(0,b.c)("sublayers")],j.prototype,"writeSublayers",null),(0,l._)([(0,h.Cb)({readOnly:!0,json:{read:!1}})],j.prototype,"type",void 0),(0,l._)([(0,h.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],j.prototype,"title",null),(0,l._)([(0,h.Cb)(k.HQ)],j.prototype,"url",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],j.prototype,"visibleSublayers",null),(0,l._)([(0,h.Cb)({type:L.Z})],j.prototype,"extent",void 0),(0,l._)([(0,h.Cb)()],j.prototype,"fullExtent",null),j=(0,l._)([(0,c.j)("esri.layers.KMLLayer")],j);const T=j},21857:(e,t,r)=>{r.d(t,{CS:()=>b,Cw:()=>c,Yu:()=>g,j5:()=>v,lm:()=>S});var s=r(42265),l=r(19545),o=r(44055),i=r(76200),n=r(84652),a=r(35995),u=r(78952),y=r(41414),p=r(376),h=r(9014),f=r(49818);const d={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function c(e){const t=e.folders||[],r=t.slice(),s=new Map,l=new Map,o=new Map,i=new Map,a=new Map,u={esriGeometryPoint:l,esriGeometryPolyline:o,esriGeometryPolygon:i};(e.featureCollection&&e.featureCollection.layers||[]).forEach((e=>{const t=(0,n.d9)(e);t.featureSet.features=[];const r=e.featureSet.geometryType;s.set(r,t);const a=e.layerDefinition.objectIdField;"esriGeometryPoint"===r?m(l,a,e.featureSet.features):"esriGeometryPolyline"===r?m(o,a,e.featureSet.features):"esriGeometryPolygon"===r&&m(i,a,e.featureSet.features)})),e.groundOverlays&&e.groundOverlays.forEach((e=>{a.set(e.id,e)})),t.forEach((t=>{t.networkLinkIds.forEach((s=>{const l=function(e,t,r){const s=function(e,t){let r;return t.some((t=>t.id===e&&(r=t,!0))),r}(e,r);return s&&(s.parentFolderId=t,s.networkLink=s),s}(s,t.id,e.networkLinks);l&&r.push(l)}))})),r.forEach((e=>{if(e.featureInfos){e.points=(0,n.d9)(s.get("esriGeometryPoint")),e.polylines=(0,n.d9)(s.get("esriGeometryPolyline")),e.polygons=(0,n.d9)(s.get("esriGeometryPolygon")),e.mapImages=[];for(const t of e.featureInfos)switch(t.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const r=u[t.type].get(t.id);r&&e[d[t.type]].featureSet.features.push(r);break}case"GroundOverlay":{const r=a.get(t.id);r&&e.mapImages.push(r);break}}e.fullExtent=S([e])}}));const y=S(r);return{folders:t,sublayers:r,extent:y}}function b(e,t,r,o){const n=l.id&&l.id.findCredential(e);e=(0,a.fl)(e,{token:n&&n.token});const u=s.Z.kmlServiceUrl;return(0,i.default)(u,{query:{url:e,model:"simple",folders:"",refresh:0!==r||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:o})}function v(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];const l=[],o={},i=t.sublayers,n=t.folders.map((e=>e.id));return i.forEach((t=>{const i=new e;if(r?i.read(t,r):i.read(t),s.length&&n.includes(i.id)&&(i.visible=s.includes(i.id)),o[t.id]=i,null!=t.parentFolderId&&-1!==t.parentFolderId){const e=o[t.parentFolderId];e.sublayers||(e.sublayers=[]),e.sublayers.unshift(i)}else l.unshift(i)})),l}function m(e,t,r){r.forEach((r=>{e.set(r.attributes[t],r)}))}async function g(e){const t=f.default.fromJSON(e.featureSet).features,r=e.layerDefinition,s=(0,h.i)(r.drawingInfo.renderer),l=o.Z.fromJSON(e.popupInfo),i=[];for(const o of t){const e=await s.getSymbolAsync(o);o.symbol=e,o.popupTemplate=l,o.visible=!0,i.push(o)}return i}function S(e){const t=(0,y.Ue)(y.Gv),r=(0,y.Ue)(y.Gv);for(const s of e){if(s.polygons&&s.polygons.featureSet&&s.polygons.featureSet.features)for(const e of s.polygons.featureSet.features)(0,p.Yg)(t,e.geometry),(0,y.TC)(r,t);if(s.polylines&&s.polylines.featureSet&&s.polylines.featureSet.features)for(const e of s.polylines.featureSet.features)(0,p.Yg)(t,e.geometry),(0,y.TC)(r,t);if(s.points&&s.points.featureSet&&s.points.featureSet.features)for(const e of s.points.featureSet.features)(0,p.Yg)(t,e.geometry),(0,y.TC)(r,t);if(s.mapImages)for(const e of s.mapImages)(0,p.Yg)(t,e.extent),(0,y.TC)(r,t)}return(0,y.fS)(r,y.Gv)?null:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:u.Z.WGS84}}}}]);
//# sourceMappingURL=3838.14bc968a.chunk.js.map