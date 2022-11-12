"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9956,4202,8694,3492],{3920:(e,t,r)=>{r.d(t,{p:()=>p,r:()=>u});var i=r(43697),n=r(15923),o=r(61247),s=r(5600),l=r(52011),a=r(72762);const p=e=>{let t=class extends e{destroy(){this.destroyed||(this._get("handles")?.destroy(),this._get("updatingHandles")?.destroy())}get handles(){return this._get("handles")||new o.Z}get updatingHandles(){return this._get("updatingHandles")||new a.t}};return(0,i._)([(0,s.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,i._)([(0,s.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,i._)([(0,l.j)("esri.core.HandleOwner")],t),t};let u=class extends(p(n.Z)){};u=(0,i._)([(0,l.j)("esri.core.HandleOwner")],u)},42033:(e,t,r)=>{r.d(t,{E:()=>n,_:()=>o});var i=r(70586);async function n(e,t){const{WhereClause:i}=await r.e(1534).then(r.bind(r,41534));return i.create(e,t)}function o(e,t){return(0,i.pC)(e)?(0,i.pC)(t)?`(${e}) AND (${t})`:e:t}},72762:(e,t,r)=>{r.d(t,{t:()=>y});var i=r(43697),n=r(15923),o=r(61247),s=r(70586),l=r(17445),a=r(1654),p=r(5600),u=r(52011);let y=class extends n.Z{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new o.Z,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,r={}){return this._installWatch(e,t,r,l.YP)}addWhen(e,t,r={}){return this._installWatch(e,t,r,l.gx)}addOnCollectionChange(e,t,{initial:r=!1,final:i=!1}={}){const n=++this._handleId;return this._handles.add([(0,l.on)(e,"after-changes",this._createSyncUpdatingCallback(),l.Z_),(0,l.on)(e,"change",t,{onListenerAdd:r?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:i?e=>t({added:[],removed:e.toArray()}):void 0})],n),{remove:()=>this._handles.remove(n)}}addPromise(e){if((0,s.Wi)(e))return e;const t=++this._handleId;this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(d)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0);const r=()=>this._handles.remove(t);return e.then(r,r),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,r={},i){const n=++this._handleId;r.sync||this._installSyncUpdatingWatch(e,n);const o=i(e,t,r);return this._handles.add(o,n),{remove:()=>this._handles.remove(n)}}_installSyncUpdatingWatch(e,t){const r=this._createSyncUpdatingCallback(),i=(0,l.YP)(e,r,{sync:!0,equals:()=>!1});return this._handles.add(i,t),i}_createSyncUpdatingCallback(){return()=>{this._handles.remove(d),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this._handles.add((0,a.Os)((()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(d))})),d)}}};(0,i._)([(0,p.Cb)({readOnly:!0})],y.prototype,"updating",void 0),y=(0,i._)([(0,u.j)("esri.core.support.WatchUpdatingTracking")],y);const d=-42},51806:(e,t,r)=>{r.d(t,{aX:()=>N});var i=r(68773),n=r(20102),o=r(92604),s=r(70586),l=r(38913),a=r(58901),p=r(82971),u=r(33955);const y={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new a.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:p.Z.WebMercator}),minus180Line:new a.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:p.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new a.Z({paths:[[[180,-180],[180,180]]],spatialReference:p.Z.WGS84}),minus180Line:new a.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:p.Z.WGS84})}};function d(e,t){return Math.ceil((e-t)/(2*t))}function c(e,t){const r=h(e);for(const e of r)for(const r of e)r[0]+=t;return e}function h(e){return(0,u.oU)(e)?e.rings:e.paths}var f=r(8744),m=r(40488),g=(r(66577),r(3172)),S=r(11282),b=r(17452);const _=o.Z.getLogger("esri.geometry.support.normalizeUtils");function w(e){return"polygon"===e[0].type}function v(e){return"polyline"===e[0].type}function C(e,t,r){if(t){const t=function(e,t){if(!(e instanceof a.Z||e instanceof l.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw _.error(e),new n.Z(e)}const r=h(e),i=[];for(const e of r){const r=[];i.push(r),r.push([e[0][0],e[0][1]]);for(let i=0;i<e.length-1;i++){const n=e[i][0],o=e[i][1],s=e[i+1][0],l=e[i+1][1],a=Math.sqrt((s-n)*(s-n)+(l-o)*(l-o)),p=(l-o)/a,u=(s-n)/a,y=a/t;if(y>1){for(let e=1;e<=y-1;e++){const i=e*t,s=u*i+n,l=p*i+o;r.push([s,l])}const e=(a+Math.floor(y-1)*t)/2,i=u*e+n,s=p*e+o;r.push([i,s])}r.push([s,l])}}return function(e){return"polygon"===e.type}(e)?new l.Z({rings:i,spatialReference:e.spatialReference}):new a.Z({paths:i,spatialReference:e.spatialReference})}(e,1e6);e=(0,m.Sx)(t,!0)}return r&&(e=c(e,r)),e}function O(e,t,r){if(Array.isArray(e)){const i=e[0];if(i>t){const r=d(i,t);e[0]=i+r*(-2*t)}else if(i<r){const t=d(i,r);e[0]=i+t*(-2*r)}}else{const i=e.x;if(i>t){const r=d(i,t);e=e.clone().offset(r*(-2*t),0)}else if(i<r){const t=d(i,r);e=e.clone().offset(t*(-2*r),0)}}return e}function x(e,t){let r=-1;for(let i=0;i<t.cutIndexes.length;i++){const n=t.cutIndexes[i],o=t.geometries[i],s=h(o);for(let e=0;e<s.length;e++){const t=s[e];t.some((r=>{if(r[0]<180)return!0;{let r=0;for(let e=0;e<t.length;e++){const i=t[e][0];r=i>r?i:r}r=Number(r.toFixed(9));const i=-360*d(r,180);for(let r=0;r<t.length;r++){const t=o.getPoint(e,r);o.setPoint(e,r,t.clone().offset(i,0))}return!0}}))}if(n===r){if(w(e))for(const t of h(o))e[n]=e[n].addRing(t);else if(v(e))for(const t of h(o))e[n]=e[n].addPath(t)}else r=n,e[n]=o}return e}async function N(e,t,r){if(!Array.isArray(e))return N([e],t);t&&"string"!=typeof t&&_.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??i.Z.geometryServiceUrl;let o,p,h,w,v,T,L,Z,I=0;const J=[],M=[];for(const t of e)if((0,s.Wi)(t))M.push(t);else if(o||(o=t.spatialReference,p=(0,f.C5)(o),h=o.isWebMercator,T=h?102100:4326,w=y[T].maxX,v=y[T].minX,L=y[T].plus180Line,Z=y[T].minus180Line),p)if("mesh"===t.type)M.push(t);else if("point"===t.type)M.push(O(t.clone(),w,v));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>O(e,w,v))),M.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,p);M.push(e.rings?new l.Z(e):e)}else if(t.extent){const e=t.extent,r=d(e.xmin,v)*(2*w);let i=0===r?t.clone():c(t.clone(),r);e.offset(r,0),e.intersects(L)&&e.xmax!==w?(I=e.xmax>I?e.xmax:I,i=C(i,h),J.push(i),M.push("cut")):e.intersects(Z)&&e.xmin!==v?(I=e.xmax*(2*w)>I?e.xmax*(2*w):I,i=C(i,h,360),J.push(i),M.push("cut")):M.push(i)}else M.push(t.clone());else M.push(t);let j=d(I,w),R=-90;const A=j,F=new a.Z;for(;j>0;){const e=360*j-180;F.addPath([[e,R],[e,-1*R]]),R*=-1,j--}if(J.length>0&&A>0){const t=x(J,await async function(e,t,r,i){const n=(0,S.en)(e),o=t[0].spatialReference,s={...i,query:{...n.query,f:"json",sr:JSON.stringify(o),target:JSON.stringify({geometryType:(0,u.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(r)}},l=await(0,g.default)(n.path+"/cut",s),{cutIndexes:a,geometries:p=[]}=l.data;return{cutIndexes:a,geometries:p.map((e=>{const t=(0,u.im)(e);return t.spatialReference=o,t}))}}(n,J,F,r)),i=[],o=[];for(let r=0;r<M.length;r++){const n=M[r];if("cut"!==n)o.push(n);else{const n=t.shift(),l=e[r];(0,s.pC)(l)&&"polygon"===l.type&&l.rings&&l.rings.length>1&&n.rings.length>=l.rings.length?(i.push(n),o.push("simplify")):o.push(h?(0,m.$)(n):n)}}if(!i.length)return o;const l=await async function(e,t,r){const i="string"==typeof e?(0,b.mN)(e):e,n=t[0].spatialReference,o=(0,u.Ji)(t[0]),s={...r,query:{...i.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify((a=t,{geometryType:(0,u.Ji)(a[0]),geometries:a.map((e=>e.toJSON()))}))}},{data:l}=await(0,g.default)(i.path+"/simplify",s);var a;return function(e,t,r){const i=(0,u.q9)(t);return e.map((e=>{const t=i.fromJSON(e);return t.spatialReference=r,t}))}(l.geometries,o,n)}(n,i,r),a=[];for(let e=0;e<o.length;e++){const t=o[e];"simplify"!==t?a.push(t):a.push(h?(0,m.$)(l.shift()):l.shift())}return a}const E=[];for(let e=0;e<M.length;e++){const t=M[e];if("cut"!==t)E.push(t);else{const e=J.shift();E.push(!0===h?(0,m.$)(e):e)}}return E}},69285:(e,t,r)=>{r.d(t,{k:()=>s});var i=r(70586),n=r(67900),o=r(8744);function s(e,t,r){if((0,i.Wi)(t)||(0,i.Wi)(r)||r.vcsWkid||(0,o.fS)(t,r))return null;const s=(0,n._R)(t)/(0,n._R)(r);if(1===s)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,s);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const r of e.paths)for(const e of r)e.length>2&&(e[2]*=t)}(e,s);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const r of e.rings)for(const e of r)e.length>2&&(e[2]*=t)}(e,s);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const r of e.points)r.length>2&&(r[2]*=t)}(e,s);case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,s);default:return null}}},62128:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Q});var i=r(43697),n=(r(66577),r(38171)),o=(r(9790),r(46791)),s=r(20102),l=r(22974),a=r(70586),p=r(16453),u=r(78286),y=r(20941),d=r(5600),c=r(75215),h=r(71715),f=r(52011),m=r(30556),g=r(44547),S=r(24470),b=r(51806),_=r(8744),w=r(19238),v=(r(67676),r(70921)),C=r(3920);r(80442),r(92604);let O=class extends((0,C.p)(o.Z)){constructor(e){super(e),this.handles.add([this.on("before-add",(e=>{(0,a.Wi)(e.item)&&e.preventDefault()})),this.on("after-add",(e=>this._own(e.item))),this.on("after-remove",(e=>this._release(e.item)))])}get owner(){return this._get("owner")}set owner(e){e!==this._get("owner")&&(this._releaseAll(),this._set("owner",e),this._ownAll())}_ownAll(){for(const e of this.items)this._own(e)}_releaseAll(){for(const e of this.items)this._release(e)}_createNewInstance(e){return this.itemType?new(o.Z.ofType(this.itemType.Type))(e):new o.Z(e)}};(0,i._)([(0,d.Cb)()],O.prototype,"owner",null),O=(0,i._)([(0,f.j)("esri.core.support.OwningCollection")],O);var x=r(87085),N=r(71612),T=r(72965),L=r(52421);let Z=class extends O{_own(e){e.layer&&"remove"in e.layer&&e.layer!==this.owner&&e.layer.remove(e),e.layer=this.owner}_release(e){e.layer===this.owner&&(e.layer=null)}};(0,i._)([(0,L.c)({Type:n.Z,ensureType:(0,c.se)(n.Z)})],Z.prototype,"itemType",void 0),Z=(0,i._)([(0,f.j)("esri.support.GraphicsCollection")],Z);var I=r(86787);let J=class extends((0,N.h)((0,T.M)(x.Z))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new Z,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};var M,j;(0,i._)([(0,d.Cb)({type:I.Z})],J.prototype,"elevationInfo",void 0),(0,i._)([(0,d.Cb)((M=Z,j="graphics",{type:M,cast:v.R,set(e){const t=(0,v.Z)(e,this._get(j),M);t.owner=this,this._set(j,t)}}))],J.prototype,"graphics",void 0),(0,i._)([(0,d.Cb)({type:["show","hide"]})],J.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)()],J.prototype,"screenSizePerspectiveEnabled",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],J.prototype,"type",void 0),(0,i._)([(0,d.Cb)({constructOnly:!0})],J.prototype,"internal",void 0),J=(0,i._)([(0,f.j)("esri.layers.GraphicsLayer")],J);const R=J;var A=r(92908),F=r(38009),E=r(16859),P=r(1231),z=r(20256),W=r(4095),k=r(77987),D=r(78724),G=r(82971),q=r(6570);function U(e){return"markup"===e.featureCollectionType||e.layers.some((e=>null!=e.layerDefinition.visibilityField||!H(e)))}function H({layerDefinition:e,featureSet:t}){const r=e.geometryType??t.geometryType;return $.find((t=>r===t.geometryTypeJSON&&e.drawingInfo?.renderer?.symbol?.type===t.identifyingSymbol.type))}function K(){return new q.Z({xmin:-180,ymin:-90,xmax:180,ymax:90})}const X=new P.Z({name:"OBJECTID",alias:"OBJECTID",type:"oid",nullable:!1,editable:!1}),B=new P.Z({name:"title",alias:"Title",type:"string",nullable:!0,editable:!0});let V=class extends R{constructor(e){super(e),this.visibilityMode="inherited"}initialize(){for(const e of this.graphics)e.sourceLayer=this.layer;this.graphics.on("after-add",(e=>{e.item.sourceLayer=this.layer})),this.graphics.on("after-remove",(e=>{e.item.sourceLayer=null}))}get fullExtent(){const e=this.layer.spatialReference,t=this.fullBounds;return(0,a.Wi)(t)?(0,g.dz)(K(),e).geometry:(0,S.HH)(t,e)}get fullBounds(){const e=this.layer.spatialReference,t=(0,S.cS)();return this.graphics.forEach((r=>{const i=(0,a.pC)(r.geometry)?(0,g.dz)(r.geometry,e).geometry:null;(0,a.pC)(i)&&(0,S.jn)(t,"point"===i.type?i:i.extent,t)})),(0,S.fS)(t,S.Gv)?null:t}get sublayers(){return this.graphics}};(0,i._)([(0,d.Cb)({readOnly:!0})],V.prototype,"fullExtent",null),(0,i._)([(0,d.Cb)({readOnly:!0})],V.prototype,"fullBounds",null),(0,i._)([(0,d.Cb)({readOnly:!0})],V.prototype,"sublayers",null),(0,i._)([(0,d.Cb)()],V.prototype,"layer",void 0),(0,i._)([(0,d.Cb)()],V.prototype,"layerId",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],V.prototype,"visibilityMode",void 0),V=(0,i._)([(0,f.j)("esri.layers.MapNotesLayer.MapNotesSublayer")],V);const $=[{geometryType:"polygon",geometryTypeJSON:"esriGeometryPolygon",id:"polygonLayer",layerId:0,title:"Polygons",identifyingSymbol:(new z.Z).toJSON()},{geometryType:"polyline",geometryTypeJSON:"esriGeometryPolyline",id:"polylineLayer",layerId:1,title:"Polylines",identifyingSymbol:(new W.Z).toJSON()},{geometryType:"multipoint",geometryTypeJSON:"esriGeometryMultipoint",id:"multipointLayer",layerId:2,title:"Multipoints",identifyingSymbol:(new k.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"pointLayer",layerId:3,title:"Points",identifyingSymbol:(new k.Z).toJSON()},{geometryType:"point",geometryTypeJSON:"esriGeometryPoint",id:"textLayer",layerId:4,title:"Text",identifyingSymbol:(new D.Z).toJSON()}];let Y=class extends((0,N.h)((0,T.M)((0,F.q)((0,E.I)((0,p.R)(x.Z)))))){constructor(e){super(e),this.capabilities={operations:{supportsMapNotesEditing:!0}},this.featureCollections=null,this.featureCollectionJSON=null,this.featureCollectionType="notes",this.legendEnabled=!1,this.listMode="hide-children",this.minScale=0,this.maxScale=0,this.spatialReference=G.Z.WGS84,this.sublayers=new o.Z($.map((e=>new V({id:e.id,layerId:e.layerId,title:e.title,layer:this})))),this.title="Map Notes",this.type="map-notes",this.visibilityMode="inherited"}readCapabilities(e,t,r){return{operations:{supportsMapNotesEditing:!U(t)&&"portal-item"!==r?.origin}}}readFeatureCollections(e,t,r){if(!U(t))return null;const i=t.layers.map((e=>{const t=new w.default;return t.read(e,r),t}));return new o.Z({items:i})}readLegacyfeatureCollectionJSON(e,t){return U(t)?(0,l.d9)(t.featureCollection):null}get fullExtent(){const e=this.spatialReference,t=(0,S.cS)();return(0,a.pC)(this.sublayers)?this.sublayers.forEach((({fullBounds:e})=>(0,a.pC)(e)?(0,S.jn)(t,e,t):t),t):this.featureCollectionJSON?.layers.some((e=>e.layerDefinition.extent))&&this.featureCollectionJSON.layers.forEach((r=>{const i=(0,g.dz)(r.layerDefinition.extent,e).geometry;(0,a.pC)(i)&&(0,S.jn)(t,i,t)})),(0,S.fS)(t,S.Gv)?(0,g.dz)(K(),e).geometry:(0,S.HH)(t,e)}readMinScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.minScale)return e.layerDefinition.minScale;return 0}readMaxScale(e,t){for(const e of t.layers)if(null!=e.layerDefinition.maxScale)return e.layerDefinition.maxScale;return 0}get multipointLayer(){return this._findSublayer("multipointLayer")}get pointLayer(){return this._findSublayer("pointLayer")}get polygonLayer(){return this._findSublayer("polygonLayer")}get polylineLayer(){return this._findSublayer("polylineLayer")}readSpatialReference(e,t){return t.layers.length?G.Z.fromJSON(t.layers[0].layerDefinition.spatialReference):G.Z.WGS84}readSublayers(e,t,r){if(U(t))return null;const i=[];let s=t.layers.reduce(((e,t)=>Math.max(e,t.layerDefinition.id??-1)),-1)+1;for(const e of t.layers){const{layerDefinition:t,featureSet:r}=e,o=t.id??s++,l=H(e);if((0,a.pC)(l)){const e=new V({id:l.id,title:t.name,layerId:o,layer:this,graphics:r.features.map((({geometry:e,symbol:t,attributes:r,popupInfo:i})=>n.Z.fromJSON({attributes:r,geometry:e,symbol:t,popupTemplate:i})))});i.push(e)}}return new o.Z(i)}writeSublayers(e,t,r,i){const{minScale:n,maxScale:o}=this;if((0,a.Wi)(e))return;const l=e.some((e=>e.graphics.length>0));if(!this.capabilities.operations.supportsMapNotesEditing)return void(l&&i?.messages?.push(new s.Z("map-notes-layer:editing-not-supported","New map notes cannot be added to this layer")));const p=[];let y=this.spatialReference.toJSON();e:for(const t of e)for(const e of t.graphics)if((0,a.pC)(e.geometry)){y=e.geometry.spatialReference.toJSON();break e}for(const t of $){const r=e.find((e=>t.id===e.id));this._writeMapNoteSublayer(p,r,t,n,o,y,i)}(0,u.RB)("featureCollection.layers",p,t)}get textLayer(){return this._findSublayer("textLayer")}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Collection"]},e)),Promise.resolve(this)}read(e,t){"featureCollection"in e&&(e=(0,l.d9)(e),Object.assign(e,e.featureCollection)),super.read(e,t)}async beforeSave(){if((0,a.Wi)(this.sublayers))return;let e=null;const t=[];for(const r of this.sublayers)for(const i of r.graphics)if((0,a.pC)(i.geometry)){const r=i.geometry;e?(0,_.fS)(r.spatialReference,e)||((0,g.Up)(r.spatialReference,e)||(0,g.kR)()||await(0,g.zD)(),i.geometry=(0,g.iV)(r,e)):e=r.spatialReference,t.push(i)}const r=await(0,b.aX)(t.map((e=>e.geometry)));t.forEach(((e,t)=>e.geometry=r[t]))}_findSublayer(e){return(0,a.Wi)(this.sublayers)?null:this.sublayers?.find((t=>t.id===e))??null}_writeMapNoteSublayer(e,t,r,i,n,o,s){const p=[];if(!(0,a.Wi)(t)){for(const e of t.graphics)this._writeMapNote(p,e,r.geometryType,s);this._normalizeObjectIds(p,X),e.push({layerDefinition:{name:t.title,drawingInfo:{renderer:{type:"simple",symbol:(0,l.d9)(r.identifyingSymbol)}},id:t.layerId,geometryType:r.geometryTypeJSON,minScale:i,maxScale:n,objectIdField:"OBJECTID",fields:[X.toJSON(),B.toJSON()],spatialReference:o},featureSet:{features:p,geometryType:r.geometryTypeJSON}})}}_writeMapNote(e,t,r,i){if((0,a.Wi)(t))return;const{geometry:n,symbol:o,popupTemplate:s}=t;if((0,a.Wi)(n))return;if(n.type!==r)return void i?.messages?.push(new y.Z("map-notes-layer:invalid-geometry-type",`Geometry "${n.type}" cannot be saved in "${r}" layer`,{graphic:t}));if((0,a.Wi)(o))return void i?.messages?.push(new y.Z("map-notes-layer:no-symbol","Skipping map notes with no symbol",{graphic:t}));const l={attributes:{...t.attributes},geometry:n.toJSON(),symbol:o.toJSON()};(0,a.pC)(s)&&(l.popupInfo=s.toJSON()),e.push(l)}_normalizeObjectIds(e,t){const r=t.name;let i=(0,A.S)(r,e)+1;const n=new Set;for(const t of e){t.attributes||(t.attributes={});const{attributes:e}=t;(null==e[r]||n.has(e[r]))&&(e[r]=i++),n.add(e[r])}}};(0,i._)([(0,d.Cb)({readOnly:!0})],Y.prototype,"capabilities",void 0),(0,i._)([(0,h.r)(["portal-item","web-map"],"capabilities",["layers"])],Y.prototype,"readCapabilities",null),(0,i._)([(0,d.Cb)({readOnly:!0})],Y.prototype,"featureCollections",void 0),(0,i._)([(0,h.r)(["web-map","portal-item"],"featureCollections",["layers"])],Y.prototype,"readFeatureCollections",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{enabled:!0,target:"featureCollection"}}}}})],Y.prototype,"featureCollectionJSON",void 0),(0,i._)([(0,h.r)(["web-map","portal-item"],"featureCollectionJSON",["featureCollection"])],Y.prototype,"readLegacyfeatureCollectionJSON",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!0,write:{enabled:!0,ignoreOrigin:!0}}})],Y.prototype,"featureCollectionType",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],Y.prototype,"fullExtent",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{target:"featureCollection.showLegend",overridePolicy(){return{enabled:null!=this.featureCollectionJSON}}}}}}})],Y.prototype,"legendEnabled",void 0),(0,i._)([(0,d.Cb)({type:["show","hide","hide-children"]})],Y.prototype,"listMode",void 0),(0,i._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],Y.prototype,"minScale",void 0),(0,i._)([(0,h.r)(["web-map","portal-item"],"minScale",["layers"])],Y.prototype,"readMinScale",null),(0,i._)([(0,d.Cb)({type:Number,nonNullable:!0,json:{write:!1}})],Y.prototype,"maxScale",void 0),(0,i._)([(0,h.r)(["web-map","portal-item"],"maxScale",["layers"])],Y.prototype,"readMaxScale",null),(0,i._)([(0,d.Cb)({readOnly:!0})],Y.prototype,"multipointLayer",null),(0,i._)([(0,d.Cb)({value:"ArcGISFeatureLayer",type:["ArcGISFeatureLayer"]})],Y.prototype,"operationalLayerType",void 0),(0,i._)([(0,d.Cb)({readOnly:!0})],Y.prototype,"pointLayer",null),(0,i._)([(0,d.Cb)({readOnly:!0})],Y.prototype,"polygonLayer",null),(0,i._)([(0,d.Cb)({readOnly:!0})],Y.prototype,"polylineLayer",null),(0,i._)([(0,d.Cb)({type:G.Z})],Y.prototype,"spatialReference",void 0),(0,i._)([(0,h.r)(["web-map","portal-item"],"spatialReference",["layers"])],Y.prototype,"readSpatialReference",null),(0,i._)([(0,d.Cb)({readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0}}}}})],Y.prototype,"sublayers",void 0),(0,i._)([(0,h.r)("web-map","sublayers",["layers"])],Y.prototype,"readSublayers",null),(0,i._)([(0,m.c)("web-map","sublayers")],Y.prototype,"writeSublayers",null),(0,i._)([(0,d.Cb)({readOnly:!0})],Y.prototype,"textLayer",null),(0,i._)([(0,d.Cb)()],Y.prototype,"title",void 0),(0,i._)([(0,d.Cb)({readOnly:!0,json:{read:!1}})],Y.prototype,"type",void 0),Y=(0,i._)([(0,f.j)("esri.layers.MapNotesLayer")],Y);const Q=Y},92908:(e,t,r)=>{r.d(t,{S:()=>n,X:()=>i});const i=1;function n(e,t){let r=0;for(const i of t){const t=i.attributes?.[e];"number"==typeof t&&isFinite(t)&&(r=Math.max(r,t))}return r}},54295:(e,t,r)=>{r.d(t,{V:()=>s});var i=r(43697),n=r(5600),o=(r(67676),r(75215),r(52011));const s=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,i._)([(0,n.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,i._)([(0,o.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,r)=>{r.d(t,{Y:()=>p});var i=r(43697),n=r(92604),o=r(70586),s=r(5600),l=(r(67676),r(75215),r(52011)),a=r(66677);const p=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.Qc)(this.url);if((0,o.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Nm)(e,n.Z.getLogger(this.declaredClass)))}};return(0,i._)([(0,s.Cb)()],t.prototype,"title",null),(0,i._)([(0,s.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,l.j)("esri.layers.mixins.ArcGISService")],t),t}},70082:(e,t,r)=>{r.d(t,{Z:()=>y});var i=r(43697),n=r(2368),o=r(35454),s=r(96674),l=r(5600),a=(r(67676),r(75215),r(52011));const p=new o.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let u=class extends((0,n.J)(s.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,i._)([(0,l.Cb)({json:{write:!0}})],u.prototype,"name",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],u.prototype,"description",void 0),(0,i._)([(0,l.Cb)({json:{read:p.read,write:p.write}})],u.prototype,"drawingTool",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],u.prototype,"prototype",void 0),(0,i._)([(0,l.Cb)({json:{write:!0}})],u.prototype,"thumbnail",void 0),u=(0,i._)([(0,a.j)("esri.layers.support.FeatureTemplate")],u);const y=u},16451:(e,t,r)=>{r.d(t,{Z:()=>c});var i=r(43697),n=r(2368),o=r(96674),s=r(5600),l=(r(67676),r(75215),r(71715)),a=r(52011),p=r(30556),u=r(72729),y=r(70082);let d=class extends((0,n.J)(o.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const r of Object.keys(e))t[r]=(0,u.im)(e[r]);return t}writeDomains(e,t){const r={};for(const t of Object.keys(e))e[t]&&(r[t]=e[t]?.toJSON());t.domains=r}};(0,i._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"id",void 0),(0,i._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"name",void 0),(0,i._)([(0,s.Cb)({json:{write:!0}})],d.prototype,"domains",void 0),(0,i._)([(0,l.r)("domains")],d.prototype,"readDomains",null),(0,i._)([(0,p.c)("domains")],d.prototype,"writeDomains",null),(0,i._)([(0,s.Cb)({type:[y.Z],json:{write:!0}})],d.prototype,"templates",void 0),d=(0,i._)([(0,a.j)("esri.layers.support.FeatureType")],d);const c=d},56765:(e,t,r)=>{r.d(t,{Z:()=>u});var i,n=r(43697),o=r(46791),s=r(96674),l=r(5600),a=(r(67676),r(75215),r(52011));let p=i=class extends s.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new o.Z}clone(){return new i({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,n._)([(0,l.Cb)({type:String,json:{write:!0}})],p.prototype,"floorField",void 0),(0,n._)([(0,l.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllMode",void 0),(0,n._)([(0,l.Cb)({json:{read:!1,write:!1}})],p.prototype,"viewAllLevelIds",void 0),p=i=(0,n._)([(0,a.j)("esri.layers.support.LayerFloorInfo")],p);const u=p},51706:(e,t,r)=>{var i,n;function o(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?i.Expression:e.field&&"string"==typeof e.field?i.Field:i.Unknown}function a(e,t){const r=t||l(e),o=e.valueUnit||"unknown";return r===i.Unknown?n.Constant:e.stops?n.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?n.ClampedLinear:"unknown"===o?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?n.Proportional:n.Additive:n.Identity:n.RealWorldSize}r.d(t,{PS:()=>l,QW:()=>a,RY:()=>i,hL:()=>n,iY:()=>o,qh:()=>s}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(i||(i={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(n||(n={}))},28694:(e,t,r)=>{r.d(t,{p:()=>o});var i=r(70586),n=r(69285);function o(e,t,r){if(!r||!r.features||!r.hasZ)return;const o=(0,n.k)(r.geometryType,t,e.outSpatialReference);if(!(0,i.Wi)(o))for(const e of r.features)o(e.geometry)}},11282:(e,t,r)=>{r.d(t,{cv:()=>l,en:()=>s,lA:()=>o}),r(68773),r(40330);var i=r(22974),n=r(17452);function o(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function s(e){return"string"==typeof e?(0,n.mN)(e):(0,i.d9)(e)}function l(e,t,r){const i={};for(const n in e){if("declaredClass"===n)continue;const o=e[n];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){i[n]=[];for(let e=0;e<o.length;e++)i[n][e]=l(o[e])}else if("object"==typeof o)if(o.toJSON){const e=o.toJSON(r&&r[n]);i[n]=t?e:JSON.stringify(e)}else i[n]=t?o:JSON.stringify(o);else i[n]=o}return i}r(71058)},58333:(e,t,r)=>{r.d(t,{ET:()=>o,I4:()=>n,eG:()=>a,lF:()=>s,lj:()=>u,qP:()=>l,wW:()=>p});const i=[252,146,31,255],n={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},o={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},s={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},a={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},p={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},u={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);