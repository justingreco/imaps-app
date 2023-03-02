"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[5725],{40237:(t,n,e)=>{e.d(n,{N:()=>i});const i={convertToGEGeometry:function(t,n){return null==n?null:t.convertJSONToGeometry(n)},exportPoint:function(t,n,e){const i=new s(t.getPointX(n),t.getPointY(n),e),o=t.hasZ(n),r=t.hasM(n);return o&&(i.z=t.getPointZ(n)),r&&(i.m=t.getPointM(n)),i},exportPolygon:function(t,n,e){return new o(t.exportPaths(n),e,t.hasZ(n),t.hasM(n))},exportPolyline:function(t,n,e){return new r(t.exportPaths(n),e,t.hasZ(n),t.hasM(n))},exportMultipoint:function(t,n,e){return new c(t.exportPoints(n),e,t.hasZ(n),t.hasM(n))},exportExtent:function(t,n,e){const i=t.hasZ(n),s=t.hasM(n),o=new a(t.getXMin(n),t.getYMin(n),t.getXMax(n),t.getYMax(n),e);if(i){const e=t.getZExtent(n);o.zmin=e.vmin,o.zmax=e.vmax}if(s){const e=t.getMExtent(n);o.mmin=e.vmin,o.mmax=e.vmax}return o}};class s{constructor(t,n,e){this.x=t,this.y=n,this.spatialReference=e,this.z=void 0,this.m=void 0}}class o{constructor(t,n,e,i){this.rings=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),i&&(this.hasM=i)}}class r{constructor(t,n,e,i){this.paths=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),i&&(this.hasM=i)}}class c{constructor(t,n,e,i){this.points=t,this.spatialReference=n,this.hasZ=void 0,this.hasM=void 0,e&&(this.hasZ=e),i&&(this.hasM=i)}}class a{constructor(t,n,e,i,s){this.xmin=t,this.ymin=n,this.xmax=e,this.ymax=i,this.spatialReference=s,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},85981:(t,n,e)=>{e.d(n,{AR:()=>x,Gr:()=>f,JG:()=>h,Jk:()=>l,KU:()=>p,Ue:()=>a,al:()=>u,ct:()=>g,nF:()=>m,zk:()=>d});var i=e(16889),s=e(21530),o=e(11186),r=e(71353),c=e(11185);function a(t){return t?{origin:(0,r.a)(t.origin),vector:(0,r.a)(t.vector)}:{origin:(0,r.c)(),vector:(0,r.c)()}}function h(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a();return u(t.origin,t.vector,n)}function u(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a();return(0,o.c)(e.origin,t),(0,o.c)(e.vector,n),e}function d(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a();return(0,o.c)(e.origin,t),(0,o.b)(e.vector,n,t),e}function l(t,n){const e=(0,o.b)(c.WM.get(),n,t.origin),s=(0,o.e)(t.vector,e),r=(0,o.e)(t.vector,t.vector),a=(0,i.uZ)(s/r,0,1),h=(0,o.b)(c.WM.get(),(0,o.g)(c.WM.get(),t.vector,a),e);return(0,o.e)(h,h)}function m(t,n,e){return g(t,n,0,1,e)}function p(t,n,e){return(0,o.a)(e,t.origin,(0,o.g)(e,t.vector,n))}function g(t,n,e,s,r){const{vector:a,origin:h}=t,u=(0,o.b)(c.WM.get(),n,h),d=(0,o.e)(a,u)/(0,o.p)(a);return(0,o.g)(r,a,(0,i.uZ)(d,e,s)),(0,o.a)(r,r,t.origin)}function f(t,n){if(v(t,function(t,n){const e=M.get();return e.origin=t,e.vector=n,e}(n.origin,n.direction),!1,_)){const{tA:n,pB:e,distance2:i}=_;if(n>=0&&n<=1)return i;if(n<0)return(0,o.d)(t.origin,e);if(n>1)return(0,o.d)((0,o.a)(c.WM.get(),t.origin,t.vector),e)}return null}function x(t,n,e){return!!v(t,n,!0,_)&&((0,o.c)(e,_.pA),!0)}function v(t,n,e,s){const r=1e-6,a=t.origin,h=(0,o.a)(c.WM.get(),a,t.vector),u=n.origin,d=(0,o.a)(c.WM.get(),u,n.vector),l=c.WM.get(),m=c.WM.get();if(l[0]=a[0]-u[0],l[1]=a[1]-u[1],l[2]=a[2]-u[2],m[0]=d[0]-u[0],m[1]=d[1]-u[1],m[2]=d[2]-u[2],Math.abs(m[0])<r&&Math.abs(m[1])<r&&Math.abs(m[2])<r)return!1;const p=c.WM.get();if(p[0]=h[0]-a[0],p[1]=h[1]-a[1],p[2]=h[2]-a[2],Math.abs(p[0])<r&&Math.abs(p[1])<r&&Math.abs(p[2])<r)return!1;const g=l[0]*m[0]+l[1]*m[1]+l[2]*m[2],f=m[0]*p[0]+m[1]*p[1]+m[2]*p[2],x=l[0]*p[0]+l[1]*p[1]+l[2]*p[2],v=m[0]*m[0]+m[1]*m[1]+m[2]*m[2],_=(p[0]*p[0]+p[1]*p[1]+p[2]*p[2])*v-f*f;if(Math.abs(_)<r)return!1;let M=(g*f-x*v)/_,b=(g+f*M)/v;e&&(M=(0,i.uZ)(M,0,1),b=(0,i.uZ)(b,0,1));const y=c.WM.get(),w=c.WM.get();return y[0]=a[0]+M*p[0],y[1]=a[1]+M*p[1],y[2]=a[2]+M*p[2],w[0]=u[0]+b*m[0],w[1]=u[1]+b*m[1],w[2]=u[2]+b*m[2],s.tA=M,s.tB=b,s.pA=y,s.pB=w,s.distance2=(0,o.d)(y,w),!0}const _={tA:0,tB:0,pA:(0,r.c)(),pB:(0,r.c)(),distance2:0},M=new s.x((()=>a()))},19995:(t,n,e)=>{e.d(n,{_W:()=>l,iV:()=>g,oj:()=>x});var i=e(92026),s=e(79803),o=e(40237),r=e(92975),c=e(81753);const a=[0,0];function h(t,n){if(!n)return null;if("x"in n){const e={x:0,y:0};return[e.x,e.y]=t(n.x,n.y,a),null!=n.z&&(e.z=n.z),null!=n.m&&(e.m=n.m),e}if("xmin"in n){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=t(n.xmin,n.ymin,a),[e.xmax,e.ymax]=t(n.xmax,n.ymax,a),n.hasZ&&(e.zmin=n.zmin,e.zmax=n.zmax,e.hasZ=!0),n.hasM&&(e.mmin=n.mmin,e.mmax=n.mmax,e.hasM=!0),e}return"rings"in n?{rings:u(n.rings,t),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:u(n.paths,t),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:d(n.points,t),hasM:n.hasM,hasZ:n.hasZ}:null}function u(t,n){const e=[];for(const i of t)e.push(d(i,n));return e}function d(t,n){const e=[];for(const i of t){const t=n(i[0],i[1],[0,0]);e.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return e}async function l(t,n){if(!t||!n)return;const e=Array.isArray(t)?t.map((t=>(0,i.pC)(t.geometry)?t.geometry.spatialReference:null)).filter(i.pC):[t];await(0,s.iQ)(e.map((t=>({source:t,dest:n}))))}const m=h.bind(null,c.hG),p=h.bind(null,c.R6);function g(t,n,e,i){if(!t)return t;if(e||(e=n,n=t.spatialReference),!(0,r.JY)(n)||!(0,r.JY)(e)||(0,r.fS)(n,e))return t;if((0,c.Q8)(n,e)){const n=(0,r.sS)(e)?m(t):p(t);return n.spatialReference=e,n}return(0,s.oj)(o.N,[t],n,e,null,i)[0]}const f=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,e){if(!t||!t.length||!n||!e||(0,r.fS)(n,e))return t;const i={geometries:t,inSpatialReference:n,outSpatialReference:e,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:e,outSpatialReference:i,resolve:a}=t;(0,c.Q8)(e,i)?(0,r.sS)(i)?a(n.map(m)):a(n.map(p)):a((0,s.oj)(o.N,n,e,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function x(t,n,e){return f.push(t,n,e)}},97731:(t,n,e)=>{e.d(n,{E6:()=>h,T:()=>r,ep:()=>a,hu:()=>o,kG:()=>d,u_:()=>u,yK:()=>c});var i=e(6394);e(90045);(0,e(67077).c)();class s{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function o(t,n){if(!t){n=n||"Assertion";const t=new Error(n).stack;throw new s(`${n} at ${t}`)}}function r(t,n){t||(n=n||"",console.warn("Verify failed: "+n+"\n"+new Error("verify").stack))}function c(t,n,e,i){let s,o=(e[0]-t[0])/n[0],r=(i[0]-t[0])/n[0];o>r&&(s=o,o=r,r=s);let c=(e[1]-t[1])/n[1],a=(i[1]-t[1])/n[1];if(c>a&&(s=c,c=a,a=s),o>a||c>r)return!1;c>o&&(o=c),a<r&&(r=a);let h=(e[2]-t[2])/n[2],u=(i[2]-t[2])/n[2];return h>u&&(s=h,h=u,u=s),!(o>u||h>r)&&(u<r&&(r=u),!(r<0))}function a(t,n,e,s,o){let r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:(0,i.a)();const c=(s[o]-e[o])*(n[0]-t[0])-(s[0]-e[0])*(n[o]-t[o]),a=(s[0]-e[0])*(t[o]-e[o])-(s[o]-e[o])*(t[0]-e[0]);if(0===c)return!1;const h=a/c;return r[0]=t[0]+h*(n[0]-t[0]),r[1]=t[o]+h*(n[o]-t[o]),!0}function h(t,n){return Math.log(t)/Math.log(n)}function u(t,n,e,i){t[12]=n,t[13]=e,t[14]=i}function d(t){return 1===t[0]&&0===t[1]&&0===t[2]&&0===t[3]&&0===t[4]&&1===t[5]&&0===t[6]&&0===t[7]&&0===t[8]&&0===t[9]&&1===t[10]&&0===t[11]&&1===t[15]}},50319:(t,n,e)=>{e.r(n),e.d(n,{default:()=>f});var i=e(27366),s=e(92026),o=e(66978),r=(e(32718),e(25243),e(63780),e(10064),e(93169),e(69912)),c=e(11186),a=e(71353),h=e(85981),u=e(23470),d=e(92536),l=e(78329),m=e(83715);function p(t,n,e){const i=(0,u.c)(),s=(0,u.g)(i);return(0,c.z)(s,s,t,.5),(0,c.z)(s,s,n,.5),i[3]=(0,c.i)(s,t),(0,c.a)(s,s,e),i}let g=class{constructor(){this._idToComponent=new Map,this._components=new l.Z((t=>t.bounds)),this._edges=new l.Z((t=>t.bounds)),this._tmpLineSegment=(0,h.Ue)(),this._tmpP1=(0,a.c)(),this._tmpP2=(0,a.c)(),this._tmpP3=(0,a.c)(),this.remoteClient=null}async fetchCandidates(t,n){await Promise.resolve(),(0,o.k_)(n),await this._ensureEdgeLocations(t,n);const e=[];return this._edges.forEachNeighbor((n=>(this._addCandidates(t,n,e),e.length<1e3)),t.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(t,n){const e=[];if(this._components.forEachNeighbor((t=>{if((0,s.Wi)(t.info)){const{id:n,uid:i}=t;e.push({id:n,uid:i})}return!0}),t.bounds),!e.length)return;const i={components:e},o=await this.remoteClient.invoke("fetchAllEdgeLocations",i,(0,s.Pt)(n,{}));for(const s of o.components)this._setFetchEdgeLocations(s)}async add(t){const n=new x(t.id,t.bounds);return this._idToComponent.set(n.id,n),this._components.add([n]),{result:{}}}async remove(t){const n=this._idToComponent.get(t.id);if(n){const t=[];this._edges.forEachNeighbor((e=>(e.component===n&&t.push(e),!0)),n.bounds),this._edges.remove(t),this._components.remove([n]),this._idToComponent.delete(n.id)}return{result:{}}}_setFetchEdgeLocations(t){const n=this._idToComponent.get(t.id);if((0,s.Wi)(n)||t.uid!==n.uid)return;const e=m.n_.createView(t.locations),i=new Array(e.count),o=(0,a.c)(),r=(0,a.c)();for(let s=0;s<e.count;s++){e.position0.getVec(s,o),e.position1.getVec(s,r);const c=p(o,r,t.origin),a=new v(n,s,c);i[s]=a}this._edges.add(i);const{objectIds:c,origin:h}=t;n.info={locations:e,objectIds:c,origin:h}}_addCandidates(t,n,e){const{info:i}=n.component,{origin:s,objectIds:o}=i,r=i.locations,a=r.position0.getVec(n.index,this._tmpP1),h=r.position1.getVec(n.index,this._tmpP2);(0,c.a)(a,a,s),(0,c.a)(h,h,s);const u=o[r.componentIndex.get(n.index)];this._addEdgeCandidate(t,u,a,h,e),this._addVertexCandidate(t,u,a,e),this._addVertexCandidate(t,u,h,e)}_addEdgeCandidate(t,n,e,i,s){if(!(t.types&d.r.EDGE))return;const o=(0,u.g)(t.bounds),r=(0,h.zk)(e,i,this._tmpLineSegment),l=(0,h.nF)(r,o,this._tmpP3);(0,u.m)(t.bounds,l)&&s.push({type:"edge",objectId:n,target:(0,a.a)(l),distance:(0,c.i)(o,l),start:(0,a.a)(e),end:(0,a.a)(i)})}_addVertexCandidate(t,n,e,i){if(!(t.types&d.r.VERTEX))return;const s=(0,u.g)(t.bounds);(0,u.m)(t.bounds,e)&&i.push({type:"vertex",objectId:n,target:(0,a.a)(e),distance:(0,c.i)(s,e)})}};g=(0,i._)([(0,r.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const f=g;class x{constructor(t,n){this.id=t,this.bounds=n,this.info=null,this.uid=++x.uid}}x.uid=0;class v{constructor(t,n,e){this.component=t,this.index=n,this.bounds=e}}}}]);
//# sourceMappingURL=5725.425ffd04.chunk.js.map