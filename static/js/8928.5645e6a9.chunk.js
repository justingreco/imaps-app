"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8928],{13491:(t,e,n)=>{n.d(e,{Q:()=>h});var i=n(63780),s=n(92026),r=n(27546),o=n(36231);class h{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=u,this._compareMinY=c,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),p.prune(),y.prune(),b.prune(),M.prune()}all(t){this._all(this._data,t)}search(t,e){let n=this._data;const i=this._toBBox;if(x(t,n))for(p.clear();n;){for(let s=0,r=n.children.length;s<r;s++){const r=n.children[s],o=n.leaf?i(r):r;x(t,o)&&(n.leaf?e(r):I(t,o)?this._all(r,e):p.push(r))}n=p.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!x(t,e))return!1;for(p.clear();e;){for(let i=0,s=e.children.length;i<s;i++){const s=e.children[i],r=e.leaf?n(s):s;if(x(t,r)){if(e.leaf||I(t,r))return!0;p.push(s)}}e=p.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new v([]),this}remove(t){if(!t)return this;let e,n=this._data,r=null,o=0,h=!1;const a=this._toBBox(t);for(b.clear(),M.clear();n||b.length>0;){if(n||(n=(0,s.j0)(b.pop()),r=b.data[b.length-1],o=M.pop()??0,h=!0),n.leaf&&(e=(0,i.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),b.push(n),this._condense(b),this;h||n.leaf||!I(n,a)?r?(o++,n=r.children[o],h=!1):n=null:(b.push(n),M.push(o),o=0,r=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,e){let n=t;for(y.clear();n;){if(!0===n.leaf)for(const t of n.children)e(t);else y.pushArray(n.children);n=y.pop()??null}}_build(t,e,n,i){const s=n-e+1;let r=this._maxEntries;if(s<=r){const i=new v(t.slice(e,n+1));return a(i,this._toBBox),i}i||(i=Math.ceil(Math.log(s)/Math.log(r)),r=Math.ceil(s/r**(i-1)));const o=new X([]);o.height=i;const h=Math.ceil(s/r),d=h*Math.ceil(Math.sqrt(r));B(t,e,n,d,this._compareMinX);for(let a=e;a<=n;a+=d){const e=Math.min(a+d-1,n);B(t,a,e,h,this._compareMinY);for(let n=a;n<=e;n+=h){const s=Math.min(n+h-1,e);o.children.push(this._build(t,n,s,i-1))}}return a(o,this._toBBox),o}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,s=1/0;for(let r=0,o=e.children.length;r<o;r++){const o=e.children[r],h=_(o),a=f(t,o)-h;a<s?(s=a,i=h<i?h:i,n=o):a===s&&h<i&&(i=h,n=o)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this._toBBox,s=n?t:i(t);b.clear();const r=this._chooseSubtree(s,this._data,e,b);for(r.children.push(t),l(r,s);e>=0&&b.data[e].children.length>this._maxEntries;)this._split(b,e),e--;this._adjustParentBBoxes(s,b,e)}_split(t,e){const n=t.data[e],i=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,i);const r=this._chooseSplitIndex(n,s,i);if(!r)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(r,n.children.length-r),h=n.leaf?new v(o):new X(o);h.height=n.height,a(n,this._toBBox),a(h,this._toBBox),e?t.data[e-1].children.push(h):this._splitRoot(n,h)}_splitRoot(t,e){this._data=new X([t,e]),this._data.height=t.height+1,a(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,s,r;i=s=1/0;for(let o=e;o<=n-e;o++){const e=d(t,0,o,this._toBBox),h=d(t,o,n,this._toBBox),a=g(e,h),l=_(e)+_(h);a<i?(i=a,r=o,s=l<s?l:s):a===i&&l<s&&(s=l,r=o)}return r}_chooseSplitAxis(t,e,n){const i=t.leaf?this._compareMinX:u,s=t.leaf?this._compareMinY:c;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,s)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const s=this._toBBox,r=d(t,0,e,s),o=d(t,n-e,n,s);let h=m(r)+m(o);for(let a=e;a<n-e;a++){const e=t.children[a];l(r,t.leaf?s(e):e),h+=m(r)}for(let a=n-e-1;a>=e;a--){const e=t.children[a];l(o,t.leaf?s(e):e),h+=m(o)}return h}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)l(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const s=t.data[e-1],r=s.children;r.splice((0,i.cq)(r,n,r.length,s.indexHint),1)}else this.clear();else a(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function a(t,e){d(t,0,t.children.length,e,t)}function d(t,e,n,i,s){s||(s=new v([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let r,o=e;o<n;o++)r=t.children[o],l(s,t.leaf?i(r):r);return s}function l(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function u(t,e){return t.minX-e.minX}function c(t,e){return t.minY-e.minY}function _(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function f(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function g(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),s=Math.min(t.maxX,e.maxX),r=Math.min(t.maxY,e.maxY);return Math.max(0,s-n)*Math.max(0,r-i)}function I(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function x(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function B(t,e,n,i,r){const h=[e,n];for(;h.length;){const e=(0,s.j0)(h.pop()),n=(0,s.j0)(h.pop());if(e-n<=i)continue;const a=n+Math.ceil((e-n)/i/2)*i;(0,o.q)(t,a,n,e,r),h.push(n,a,a,e)}}const p=new r.Z,y=new r.Z,b=new r.Z,M=new r.Z({deallocator:void 0});class Y extends class{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class v extends Y{constructor(t){super(),this.children=t,this.leaf=!0}}class X extends Y{constructor(t){super(),this.children=t,this.leaf=!1}}},85403:(t,e,n)=>{n.d(e,{Y:()=>r});var i=n(92026);function s(t,e){return t?e?4:3:e?3:2}function r(t,e,n,r,a){if((0,i.Wi)(e)||!e.lengths.length)return null;const d="upperLeft"===a?.originPosition?-1:1;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const l=t.coords,u=[],c=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:_,coords:m}=e,f=s(n,r);let g=0;for(const i of _){const t=o(c,m,g,i,n,r,d);t&&u.push(t),g+=i*f}if(u.sort(((t,e)=>{let i=d*t[2]-d*e[2];return 0===i&&n&&(i=t[4]-e[4]),i})),u.length){let t=6*u[0][2];l[0]=u[0][0]/t,l[1]=u[0][1]/t,n&&(t=6*u[0][4],l[2]=0!==t?u[0][3]/t:0),(l[0]<c[0]||l[0]>c[1]||l[1]<c[2]||l[1]>c[3]||n&&(l[2]<c[4]||l[2]>c[5]))&&(l.length=0)}if(!l.length){const t=e.lengths[0]?h(m,0,_[0],n,r):null;if(!t)return null;l[0]=t[0],l[1]=t[1],n&&t.length>2&&(l[2]=t[2])}return t}function o(t,e,n,i,r,o){let h=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1;const a=s(r,o);let d=n,l=n+a,u=0,c=0,_=0,m=0,f=0;for(let s=0,I=i-1;s<I;s++,d+=a,l+=a){const n=e[d],i=e[d+1],s=e[d+2],o=e[l],h=e[l+1],a=e[l+2];let g=n*h-o*i;m+=g,u+=(n+o)*g,c+=(i+h)*g,r&&(g=n*a-o*s,_+=(s+a)*g,f+=g),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),i<t[2]&&(t[2]=i),i>t[3]&&(t[3]=i),r&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(m*h>0&&(m*=-1),f*h>0&&(f*=-1),!m)return null;const g=[u,c,.5*m];return r&&(g[3]=_,g[4]=.5*f),g}function h(t,e,n,i,r){const o=s(i,r);let h=e,c=e+o,_=0,m=0,f=0,g=0;for(let s=0,I=n-1;s<I;s++,h+=o,c+=o){const e=t[h],n=t[h+1],s=t[h+2],r=t[c],o=t[c+1],I=t[c+2],x=i?d(e,n,s,r,o,I):a(e,n,r,o);if(x)if(_+=x,i){const t=u(e,n,s,r,o,I);m+=x*t[0],f+=x*t[1],g+=x*t[2]}else{const t=l(e,n,r,o);m+=x*t[0],f+=x*t[1]}}return _>0?i?[m/_,f/_,g/_]:[m/_,f/_]:n>0?i?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function a(t,e,n,i){const s=n-t,r=i-e;return Math.sqrt(s*s+r*r)}function d(t,e,n,i,s,r){const o=i-t,h=s-e,a=r-n;return Math.sqrt(o*o+h*h+a*a)}function l(t,e,n,i){return[t+.5*(n-t),e+.5*(i-e)]}function u(t,e,n,i,s,r){return[t+.5*(i-t),e+.5*(s-e),n+.5*(r-n)]}},66020:(t,e,n)=>{n.d(e,{H:()=>a});var i=n(93169),s=n(13491),r=n(65156);const o={minX:0,minY:0,maxX:0,maxY:0};function h(t,e,n){(function(t){o.minX=t[0],o.minY=t[1],o.maxX=t[2],o.maxY=t[3]})(e),t.search(o,n)}class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new s.Q(9,(0,i.Z)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,i)=>{t[e++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=(0,r.cS)();for(const e of this._boundsById.values())e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),h(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},68928:(t,e,n)=>{n.d(e,{Z:()=>m});var i=n(10064),s=n(91505),r=n(32718),o=n(92026),h=n(41414),a=n(65156),d=n(83406),l=n(66020),u=n(77835),c=n(31904);const _=(0,h.Ue)();class m{constructor(t){this.geometryInfo=t,this._boundsStore=new l.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new s.Z,this.featureAdapter=u.n}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let t=0;return this._featuresById.forEach((e=>{(0,o.pC)(e.geometry)&&e.geometry.coords&&(t+=e.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:t/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(t){if((0,o.Wi)(this.fullBounds))return null;const[e,n,i,s]=this.fullBounds;return{xmin:e,ymin:n,xmax:i,ymax:s,spatialReference:(0,c.S2)(t)}}add(t){this._add(t),this._emitChanged()}addMany(t){for(const e of t)this._add(e);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(t){const e=this._featuresById.get(t);return e?(this._remove(e),this._emitChanged(),e):null}removeManyById(t){this._boundsStore.invalidateIndex();for(const e of t){const t=this._featuresById.get(e);t&&this._remove(t)}this._emitChanged()}forEachBounds(t,e){for(const n of t){const t=this._boundsStore.get(n.objectId);t&&e((0,h.JR)(_,t))}}getFeature(t){return this._featuresById.get(t)}has(t){return this._featuresById.has(t)}forEach(t){this._featuresById.forEach((e=>t(e)))}forEachInBounds(t,e){this._boundsStore.forEachInBounds(t,(t=>{e(this._featuresById.get(t))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let t=!1;this._featuresById.forEach(((e,n)=>{this._markedIds.has(n)||(t=!0,this._remove(e))})),this._markedIds.clear(),t&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(t){if(!t)return;const e=t.objectId;if(null==e)return void r.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new i.Z("featurestore:invalid-feature","feature id is missing",{feature:t}));const n=this._featuresById.get(e);let s;if(this._markedIds.add(e),n?(t.displayId=n.displayId,s=this._boundsStore.get(e),this._boundsStore.delete(e)):(0,o.pC)(this.onFeatureAdd)&&this.onFeatureAdd(t),(0,o.Wi)(t.geometry)||!t.geometry.coords||!t.geometry.coords.length)return this._boundsStore.set(e,null),void this._featuresById.set(e,t);s=(0,d.$)((0,o.pC)(s)?s:(0,a.Ue)(),t.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),(0,o.pC)(s)&&this._boundsStore.set(e,s),this._featuresById.set(e,t)}_remove(t){(0,o.pC)(this.onFeatureRemove)&&this.onFeatureRemove(t);const e=t.objectId;return this._markedIds.delete(e),this._boundsStore.delete(e),this._featuresById.delete(e),t}}},77835:(t,e,n)=>{n.d(e,{n:()=>h});var i=n(92026),s=n(85403),r=n(3182),o=n(80457);const h={getObjectId:t=>t.objectId,getAttributes:t=>t.attributes,getAttribute:(t,e)=>t.attributes[e],cloneWithGeometry:(t,e)=>new r.u_(e,t.attributes,null,t.objectId),getGeometry:t=>t.geometry,getCentroid:(t,e)=>((0,i.Wi)(t.centroid)&&(t.centroid=(0,s.Y)(new o.Z,t.geometry,e.hasZ,e.hasM)),t.centroid)}}}]);
//# sourceMappingURL=8928.5645e6a9.chunk.js.map