"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[7774,5732],{5732:(e,t,i)=>{i.d(t,{a:()=>r,c:()=>s,g:()=>n});var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function r(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}},69801:(e,t,i)=>{i.d(t,{WJ:()=>h,Xq:()=>a});var s,n,r=i(70586),o=i(44553);(n=s||(s={}))[n.ALL=0]="ALL",n[n.SOME=1]="SOME";class a{constructor(e,t,i){this._namespace=e,this._storage=t,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",i&&(this._storage.registerRemoveFunc(this._namespace,i),this._removeFunc=!0)}destroy(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this),this._storage=null}get namespace(){return this._namespace.slice(0,-1)}get hitRate(){return this._hit/(this._hit+this._miss)}get size(){return this._storage.size}get maxSize(){return this._storage.maxSize}resetHitRate(){this._hit=this._miss=0}put(e,t,i,s=0){this._storage.put(this._namespace+e,t,i,s)}get(e){const t=this._storage.get(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}pop(e){const t=this._storage.pop(this._namespace+e);return void 0===t?++this._miss:++this._hit,t}updateSize(e,t,i){this._storage.updateSize(this._namespace+e,t,i)}clear(){this._storage.clear(this._namespace)}clearAll(){this._storage.clearAll()}getStats(){return this._storage.getStats()}resetStats(){this._storage.resetStats()}}class h{constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new o.Z,this._users=new o.Z}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear(),this._db=null}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,t){this._removeFuncs.push([e,t])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace((t=>t[0]!==e))}get size(){return this._size}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,0),this._checkSizeLimit()}put(e,t,i,n){const r=this._db.get(e);if(r&&(this._size-=r.size,this._db.delete(e),r.entry!==t&&this._notifyRemove(e,r.entry,s.ALL)),i>this._maxSize)return void this._notifyRemove(e,t,s.ALL);if(void 0===t)return void console.warn("Refusing to cache undefined entry ");if(!i||i<0)return void console.warn("Refusing to cache entry with invalid size "+i);const o=1+Math.max(n,-3)- -3;this._db.set(e,{entry:t,size:i,lifetime:o,lives:o}),this._size+=i,this._checkSizeLimit()}updateSize(e,t,i){const n=this._db.get(e);if(n&&n.entry===t){for(this._size-=n.size;i>this._maxSize;){const n=this._notifyRemove(e,t,s.SOME);if(!((0,r.pC)(n)&&n>0))return void this._db.delete(e);i=n}n.size=i,this._size+=i,this._checkSizeLimit()}}pop(e){const t=this._db.get(e);if(t)return this._size-=t.size,this._db.delete(e),++this._hit,t.entry;++this._miss}get(e){const t=this._db.get(e);if(void 0!==t)return this._db.delete(e),t.lives=t.lifetime,this._db.set(e,t),++this._hit,t.entry;++this._miss}getStats(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},t={},i=new Array;this._db.forEach(((e,s)=>{const n=e.lifetime;i[n]=(i[n]||0)+e.size,this._users.forAll((i=>{const n=i.namespace;if(s.startsWith(n)){const i=t[n]||0;t[n]=i+e.size}}))}));const s={};this._users.forAll((e=>{const i=e.namespace;if(!isNaN(e.hitRate)&&e.hitRate>0){const n=t[i]||0;t[i]=n,s[i]=Math.round(100*e.hitRate)+"%"}else s[i]="0%"}));const n=Object.keys(t);n.sort(((e,i)=>t[i]-t[e])),n.forEach((i=>e[i]=Math.round(t[i]/2**20)+"MB / "+s[i]));for(let t=i.length-1;t>=0;--t){const s=i[t];s&&(e["Priority "+(t+-3-1)]=Math.round(s/this.size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll((e=>e.resetHitRate()))}clear(e){this._db.forEach(((t,i)=>{i.startsWith(e)&&(this._size-=t.size,this._db.delete(i),this._notifyRemove(i,t.entry,s.ALL))}))}clearAll(){this._db.forEach(((e,t)=>this._notifyRemove(t,e.entry,s.ALL))),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,t,i){let s;return this._removeFuncs.some((n=>{if(e.startsWith(n[0])){const e=n[1](t,i);return"number"==typeof e&&(s=e),!0}return!1})),s}_checkSizeLimit(){if(!(this._size<=this._maxSize))for(const[e,t]of this._db){if(this._db.delete(e),t.lives<=1){this._size-=t.size;const i=this._notifyRemove(e,t.entry,s.SOME);(0,r.pC)(i)&&i>0&&(this._size+=i,t.lives=t.lifetime,t.size=i,this._db.set(e,t))}else--t.lives,this._db.set(e,t);if(this._size<=.9*this.maxSize)return}}}},17445:(e,t,i)=>{i.d(t,{N1:()=>c,YP:()=>h,Z_:()=>_,gx:()=>u,nn:()=>g,on:()=>d,tX:()=>y});var s=i(91460),n=i(50758),r=i(70586),o=i(95330),a=i(26258);function h(e,t,i={}){return l(e,t,i,f)}function u(e,t,i={}){return l(e,t,i,m)}function l(e,t,i={},s){let n=null;const o=i.once?(e,i)=>{s(e)&&((0,r.hw)(n),t(e,i))}:(e,i)=>{s(e)&&t(e,i)};if(n=(0,a.aQ)(e,o,i.sync,i.equals),i.initial){const t=e();o(t,t)}return n}function d(e,t,i,o={}){let a=null,u=null,l=null;function d(){a&&u&&(u.remove(),o.onListenerRemove?.(a),a=null,u=null)}function c(e){o.once&&o.once&&(0,r.hw)(l),i(e)}const f=h(e,((e,i)=>{d(),(0,s.vT)(e)&&(a=e,u=(0,s.on)(e,t,c),o.onListenerAdd?.(e))}),{sync:o.sync,initial:!0});return l=(0,n.kB)((()=>{f.remove(),d()})),l}function c(e,t){return function(e,t,i){if((0,o.Hc)(i))return Promise.reject((0,o.zE)());const s=e();if(t?.(s))return Promise.resolve(s);let a=null;function h(){a=(0,r.hw)(a)}return new Promise(((s,r)=>{a=(0,n.AL)([(0,o.fu)(i,(()=>{h(),r((0,o.zE)())})),l(e,(e=>{h(),s(e)}),{sync:!1,once:!0},t??f)])}))}(e,m,t)}function f(e){return!0}function m(e){return!!e}i(87538);const _={sync:!0},g={initial:!0},y={sync:!0,initial:!0}},60437:(e,t,i)=>{i.d(t,{Gv:()=>p,HH:()=>a,JR:()=>_,TC:()=>h,Tn:()=>c,Ue:()=>r,al:()=>o,cS:()=>m,dp:()=>l,fS:()=>y,op:()=>d,pp:()=>u,t8:()=>f});var s=i(70586),n=i(6570);function r(e=b){return[e[0],e[1],e[2],e[3],e[4],e[5]]}function o(e,t,i,s,n,o,a=r()){return a[0]=e,a[1]=t,a[2]=i,a[3]=s,a[4]=n,a[5]=o,a}function a(e,t){const i=isFinite(e[2])||isFinite(e[5]);return new n.Z(i?{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],zmin:e[2],zmax:e[5],spatialReference:t}:{xmin:e[0],xmax:e[3],ymin:e[1],ymax:e[4],spatialReference:t})}function h(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[3]),e[4]=Math.max(e[4],t[4]),e[5]=Math.max(e[5],t[5])}function u(e,t){e[0]=Math.min(e[0],t[0]),e[1]=Math.min(e[1],t[1]),e[2]=Math.min(e[2],t[2]),e[3]=Math.max(e[3],t[0]),e[4]=Math.max(e[4],t[1]),e[5]=Math.max(e[5],t[2])}function l(e,t=[0,0,0]){return t[0]=function(e){return e[0]>=e[3]?0:e[3]-e[0]}(e),t[1]=function(e){return e[1]>=e[4]?0:e[4]-e[1]}(e),t[2]=function(e){return e[2]>=e[5]?0:e[5]-e[2]}(e),t}function d(e,t,i=e){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i!==e&&(i[3]=e[3],i[4]=e[4],i[5]=e[5]),i}function c(e,t,i=e){return i[3]=t[0],i[4]=t[1],i[5]=t[2],i!==e&&(i[0]=e[0],i[1]=e[1],i[2]=e[2]),e}function f(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function m(e){return e?f(e,p):r(p)}function _(e,t){return e[0]=t[0],e[1]=t[1],e[2]=Number.NEGATIVE_INFINITY,e[3]=t[2],e[4]=t[3],e[5]=Number.POSITIVE_INFINITY,e}function g(e){return 6===e.length}function y(e,t,i){if((0,s.Wi)(e)||(0,s.Wi)(t))return e===t;if(!g(e)||!g(t))return!1;if(i){for(let s=0;s<e.length;s++)if(!i(e[s],t[s]))return!1}else for(let i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}i(24470);const p=[1/0,1/0,1/0,-1/0,-1/0,-1/0],b=[0,0,0,0,0,0];r()},51806:(e,t,i)=>{i.d(t,{aX:()=>F});var s=i(68773),n=i(20102),r=i(92604),o=i(70586),a=i(38913),h=i(58901),u=i(82971),l=i(33955);const d={102100:{maxX:20037508.342788905,minX:-20037508.342788905,plus180Line:new h.Z({paths:[[[20037508.342788905,-20037508.342788905],[20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator}),minus180Line:new h.Z({paths:[[[-20037508.342788905,-20037508.342788905],[-20037508.342788905,20037508.342788905]]],spatialReference:u.Z.WebMercator})},4326:{maxX:180,minX:-180,plus180Line:new h.Z({paths:[[[180,-180],[180,180]]],spatialReference:u.Z.WGS84}),minus180Line:new h.Z({paths:[[[-180,-180],[-180,180]]],spatialReference:u.Z.WGS84})}};function c(e,t){return Math.ceil((e-t)/(2*t))}function f(e,t){const i=m(e);for(const e of i)for(const i of e)i[0]+=t;return e}function m(e){return(0,l.oU)(e)?e.rings:e.paths}var _=i(8744),g=i(40488),y=(i(66577),i(3172)),p=i(11282),b=i(17452);const v=r.Z.getLogger("esri.geometry.support.normalizeUtils");function I(e){return"polygon"===e[0].type}function x(e){return"polyline"===e[0].type}function S(e,t,i){if(t){const t=function(e,t){if(!(e instanceof h.Z||e instanceof a.Z)){const e="straightLineDensify: the input geometry is neither polyline nor polygon";throw v.error(e),new n.Z(e)}const i=m(e),s=[];for(const e of i){const i=[];s.push(i),i.push([e[0][0],e[0][1]]);for(let s=0;s<e.length-1;s++){const n=e[s][0],r=e[s][1],o=e[s+1][0],a=e[s+1][1],h=Math.sqrt((o-n)*(o-n)+(a-r)*(a-r)),u=(a-r)/h,l=(o-n)/h,d=h/t;if(d>1){for(let e=1;e<=d-1;e++){const s=e*t,o=l*s+n,a=u*s+r;i.push([o,a])}const e=(h+Math.floor(d-1)*t)/2,s=l*e+n,o=u*e+r;i.push([s,o])}i.push([o,a])}}return function(e){return"polygon"===e.type}(e)?new a.Z({rings:s,spatialReference:e.spatialReference}):new h.Z({paths:s,spatialReference:e.spatialReference})}(e,1e6);e=(0,g.Sx)(t,!0)}return i&&(e=f(e,i)),e}function w(e,t,i){if(Array.isArray(e)){const s=e[0];if(s>t){const i=c(s,t);e[0]=s+i*(-2*t)}else if(s<i){const t=c(s,i);e[0]=s+t*(-2*i)}}else{const s=e.x;if(s>t){const i=c(s,t);e=e.clone().offset(i*(-2*t),0)}else if(s<i){const t=c(s,i);e=e.clone().offset(t*(-2*i),0)}}return e}function z(e,t){let i=-1;for(let s=0;s<t.cutIndexes.length;s++){const n=t.cutIndexes[s],r=t.geometries[s],o=m(r);for(let e=0;e<o.length;e++){const t=o[e];t.some((i=>{if(i[0]<180)return!0;{let i=0;for(let e=0;e<t.length;e++){const s=t[e][0];i=s>i?s:i}i=Number(i.toFixed(9));const s=-360*c(i,180);for(let i=0;i<t.length;i++){const t=r.getPoint(e,i);r.setPoint(e,i,t.clone().offset(s,0))}return!0}}))}if(n===i){if(I(e))for(const t of m(r))e[n]=e[n].addRing(t);else if(x(e))for(const t of m(r))e[n]=e[n].addPath(t)}else i=n,e[n]=r}return e}async function F(e,t,i){if(!Array.isArray(e))return F([e],t);t&&"string"!=typeof t&&v.warn("normalizeCentralMeridian()","The url object is deprecated, use the url string instead");const n="string"==typeof t?t:t?.url??s.Z.geometryServiceUrl;let r,u,m,I,x,M,B,R,T=0;const L=[],Z=[];for(const t of e)if((0,o.Wi)(t))Z.push(t);else if(r||(r=t.spatialReference,u=(0,_.C5)(r),m=r.isWebMercator,M=m?102100:4326,I=d[M].maxX,x=d[M].minX,B=d[M].plus180Line,R=d[M].minus180Line),u)if("mesh"===t.type)Z.push(t);else if("point"===t.type)Z.push(w(t.clone(),I,x));else if("multipoint"===t.type){const e=t.clone();e.points=e.points.map((e=>w(e,I,x))),Z.push(e)}else if("extent"===t.type){const e=t.clone()._normalize(!1,!1,u);Z.push(e.rings?new a.Z(e):e)}else if(t.extent){const e=t.extent,i=c(e.xmin,x)*(2*I);let s=0===i?t.clone():f(t.clone(),i);e.offset(i,0),e.intersects(B)&&e.xmax!==I?(T=e.xmax>T?e.xmax:T,s=S(s,m),L.push(s),Z.push("cut")):e.intersects(R)&&e.xmin!==x?(T=e.xmax*(2*I)>T?e.xmax*(2*I):T,s=S(s,m,360),L.push(s),Z.push("cut")):Z.push(s)}else Z.push(t.clone());else Z.push(t);let A=c(T,I),C=-90;const N=A,q=new h.Z;for(;A>0;){const e=360*A-180;q.addPath([[e,C],[e,-1*C]]),C*=-1,A--}if(L.length>0&&N>0){const t=z(L,await async function(e,t,i,s){const n=(0,p.en)(e),r=t[0].spatialReference,o={...s,query:{...n.query,f:"json",sr:JSON.stringify(r),target:JSON.stringify({geometryType:(0,l.Ji)(t[0]),geometries:t}),cutter:JSON.stringify(i)}},a=await(0,y.default)(n.path+"/cut",o),{cutIndexes:h,geometries:u=[]}=a.data;return{cutIndexes:h,geometries:u.map((e=>{const t=(0,l.im)(e);return t.spatialReference=r,t}))}}(n,L,q,i)),s=[],r=[];for(let i=0;i<Z.length;i++){const n=Z[i];if("cut"!==n)r.push(n);else{const n=t.shift(),a=e[i];(0,o.pC)(a)&&"polygon"===a.type&&a.rings&&a.rings.length>1&&n.rings.length>=a.rings.length?(s.push(n),r.push("simplify")):r.push(m?(0,g.$)(n):n)}}if(!s.length)return r;const a=await async function(e,t,i){const s="string"==typeof e?(0,b.mN)(e):e,n=t[0].spatialReference,r=(0,l.Ji)(t[0]),o={...i,query:{...s.query,f:"json",sr:n.wkid?n.wkid:JSON.stringify(n),geometries:JSON.stringify((h=t,{geometryType:(0,l.Ji)(h[0]),geometries:h.map((e=>e.toJSON()))}))}},{data:a}=await(0,y.default)(s.path+"/simplify",o);var h;return function(e,t,i){const s=(0,l.q9)(t);return e.map((e=>{const t=s.fromJSON(e);return t.spatialReference=i,t}))}(a.geometries,r,n)}(n,s,i),h=[];for(let e=0;e<r.length;e++){const t=r[e];"simplify"!==t?h.push(t):h.push(m?(0,g.$)(a.shift()):a.shift())}return h}const E=[];for(let e=0;e<Z.length;e++){const t=Z[e];if("cut"!==t)E.push(t);else{const e=L.shift();E.push(!0===m?(0,g.$)(e):e)}}return E}},37549:(e,t,i)=>{i.d(t,{H:()=>a});var s=i(80442),n=i(24133),r=i(24470);const o={minX:0,minY:0,maxX:0,maxY:0};class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new n.Q(9,(0,s.Z)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((i,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,r.cS)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,i){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,i)}(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},57191:(e,t,i)=>{i.d(t,{Z:()=>_});var s=i(20102),n=i(32448),r=i(92604),o=i(70586),a=i(60437),h=i(24470),u=i(98732),l=i(37549),d=i(29730),c=i(70272),f=i(5428);const m={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new c.u_(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>((0,o.Wi)(e.centroid)&&(e.centroid=(0,d.Y)(new f.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)};class _{constructor(e){this.geometryInfo=e,this._boundsStore=new l.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new n.Z,this.featureAdapter=m}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{(0,o.pC)(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t,i){for(const s of e){const e=this._boundsStore.get(s.objectId);e&&t((0,a.JR)(i,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}toArray(){return Array.from(this._featuresById.values())}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,i)=>{this._markedIds.has(i)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const i=this._featuresById.get(t);let n;if(this._markedIds.add(t),i?(e.displayId=i.displayId,n=this._boundsStore.get(t),this._boundsStore.delete(t)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(e),(0,o.Wi)(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);n=(0,u.$)((0,o.pC)(n)?n:(0,h.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(n)&&this._boundsStore.set(t,n),this._featuresById.set(t,e)}_remove(e){return(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(e),this._markedIds.delete(e.objectId),this._boundsStore.delete(e.objectId),this._featuresById.delete(e.objectId),e}}},23095:(e,t,i)=>{i.d(t,{O0:()=>c,av:()=>h,b:()=>g,d1:()=>l,og:()=>_});var s=i(70586),n=i(8744),r=i(35671);class o{constructor(){this.code=null,this.description=null}}class a{constructor(e){this.error=new o,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}}function h(e){return new a(e)}class u{constructor(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}}function l(e){return new u(e)}const d=new Set;function c(e,t,i,s=!1,n){d.clear();for(const o in i){const a=e?.get(o);if(!a)continue;const u=i[o],l=f(a,u);if(l!==u&&n&&n.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:a,originalValue:u,sanitizedValue:l}}),d.add(a.name),a&&(s||a.editable)){const e=(0,r.Qc)(a,l);if(e)return h((0,r.vP)(e,a,l));t[a.name]=l}}for(const t of e?.requiredFields??[])if(!d.has(t.name))return h(`missing required field "${t.name}"`);return null}function f(e,t){let i=t;return"string"==typeof t&&(0,r.H7)(e)?i=parseFloat(t):null!=t&&(0,r.qN)(e)&&"string"!=typeof t&&(i=String(t)),(0,r.Pz)(i)}let m;function _(e,t){if(!e||!(0,n.JY)(t))return e;if("rings"in e||"paths"in e){if((0,s.Wi)(m))throw new TypeError("geometry engine not loaded");return m.simplify(t,e)}return e}async function g(e,t){!(0,n.JY)(e)||"esriGeometryPolygon"!==t&&"esriGeometryPolyline"!==t||await async function(){return(0,s.Wi)(m)&&(m=await Promise.all([i.e(5837),i.e(247)]).then(i.bind(i,30247))),m}()}},99514:(e,t,i)=>{i.d(t,{Z:()=>o});var s=i(35671);function n(e){return"oid"===e.type||"esriFieldTypeOID"===e.type}function r(e){return"global-id"===e.type||"esriFieldTypeGlobalID"===e.type}class o{constructor(e=[]){if(this.fields=[],this._fieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this.dateFields=[],this.numericFields=[],this._requiredFields=null,!e)return;this.fields=e;const t=[];for(const o of e){const e=o&&o.name;if(e){const h=a(e);this._fieldsMap.set(e,o),this._fieldsMap.set(h,o),t.push(h),"date"===(i=o).type||"esriFieldTypeDate"===i.type?(this.dateFields.push(o),this._dateFieldsSet.add(o)):(0,s.H7)(o)&&(this._numericFieldsSet.add(o),this.numericFields.push(o)),n(o)||r(o)||(o.editable=null==o.editable||!!o.editable,o.nullable=null==o.nullable||!!o.nullable)}}var i;t.sort(),this.uid=t.join(",")}destroy(){this._fieldsMap.clear()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const e of this.fields)n(e)||r(e)||e.nullable||void 0!==(0,s.os)(e)||this._requiredFields.push(e)}return this._requiredFields}has(e){return null!=this.get(e)}get(e){return null!=e?this._fieldsMap.get(e)||this._fieldsMap.get(a(e)):void 0}isDateField(e){return this._dateFieldsSet.has(this.get(e))}isNumericField(e){return this._numericFieldsSet.has(this.get(e))}normalizeFieldName(e){const t=this.get(e);if(t)return t.name??void 0}}function a(e){return e.toLowerCase().trim()}},86719:(e,t,i)=>{i.d(t,{v:()=>s});const s=new(i(35454).X)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},11282:(e,t,i)=>{i.d(t,{cv:()=>a,en:()=>o,lA:()=>r}),i(68773),i(40330);var s=i(22974),n=i(17452);function r(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function o(e){return"string"==typeof e?(0,n.mN)(e):(0,s.d9)(e)}function a(e,t,i){const s={};for(const n in e){if("declaredClass"===n)continue;const r=e[n];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){s[n]=[];for(let e=0;e<r.length;e++)s[n][e]=a(r[e])}else if("object"==typeof r)if(r.toJSON){const e=r.toJSON(i&&i[n]);s[n]=t?e:JSON.stringify(e)}else s[n]=t?r:JSON.stringify(r);else s[n]=r}return s}i(71058)}}]);