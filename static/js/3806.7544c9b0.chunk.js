"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[3806],{83806:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>H});var r=e(19545),a=e(47238),i=e(44715),u=e(95435),s=e(53866),o=e(32238),c=e(84178),l=e(77577),f=e(585),d=e(80885),w=e(29909),y=e(77981),h=e(22564),m=e(62357),p=e(72741),g=e(93249),A=e(68860);function Z(n){return 0===r.i8.indexOf("4.")?d.Z.fromExtent(n):new d.Z({spatialReference:n.spatialReference,rings:[[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]]})}function v(n,t,e){if((0,i.y)(n,2,2,t,e),n[0]instanceof o.Z&&n[1]instanceof o.Z);else if(n[0]instanceof o.Z&&null===n[1]);else if(n[1]instanceof o.Z&&null===n[0]);else if(null!==n[0]||null!==n[1])throw new h.aV(t,h.rH.InvalidParameter,e)}async function I(n,t){if("polygon"!==n.type&&"polyline"!==n.type&&"extent"!==n.type)return 0;let e=1;(n.spatialReference.vcsWkid||n.spatialReference.latestVcsWkid)&&(e=(0,u._R)(n.spatialReference)/(0,A.c9)(n.spatialReference));let r=0;if("polyline"===n.type)for(const i of n.paths)for(let n=1;n<i.length;n++)r+=(0,u.AW)(i[n],i[n-1],e);else if("polygon"===n.type)for(const i of n.rings){for(let n=1;n<i.length;n++)r+=(0,u.AW)(i[n],i[n-1],e);(i[0][0]!==i[i.length-1][0]||i[0][1]!==i[i.length-1][1]||void 0!==i[0][2]&&i[0][2]!==i[i.length-1][2])&&(r+=(0,u.AW)(i[0],i[i.length-1],e))}else"extent"===n.type&&(r+=2*(0,u.AW)([n.xmin,n.ymin,0],[n.xmax,n.ymin,0],e),r+=2*(0,u.AW)([n.xmin,n.ymin,0],[n.xmin,n.ymax,0],e),r*=2,r+=4*Math.abs((0,i.A)(n.zmax,0)*e-(0,i.A)(n.zmin,0)*e));const a=new w.Z({hasZ:!1,hasM:!1,spatialReference:n.spatialReference,paths:[[0,0],[0,r]]});return(0,c.sz)(a,t)}function H(n){"async"===n.mode&&(n.functions.disjoint=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(v(a=(0,i.G)(a),t,e),null===a[0]||null===a[1]||(0,c.ED)(a[0],a[1]))))},n.functions.intersects=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(v(a=(0,i.G)(a),t,e),null!==a[0]&&null!==a[1]&&(0,c.kK)(a[0],a[1]))))},n.functions.touches=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(v(a=(0,i.G)(a),t,e),null!==a[0]&&null!==a[1]&&(0,c.W4)(a[0],a[1]))))},n.functions.crosses=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(v(a=(0,i.G)(a),t,e),null!==a[0]&&null!==a[1]&&(0,c.jU)(a[0],a[1]))))},n.functions.within=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(v(a=(0,i.G)(a),t,e),null!==a[0]&&null!==a[1]&&(0,c.uh)(a[0],a[1]))))},n.functions.contains=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(v(a=(0,i.G)(a),t,e),null!==a[0]&&null!==a[1]&&(0,c.r3)(a[0],a[1]))))},n.functions.overlaps=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(v(a=(0,i.G)(a),t,e),null!==a[0]&&null!==a[1]&&(0,c.Nm)(a[0],a[1]))))},n.functions.equals=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>((0,i.y)(a,2,2,t,e),a[0]===a[1]||(a[0]instanceof o.Z&&a[1]instanceof o.Z?(0,c.fS)(a[0],a[1]):!(!(0,i.k)(a[0])||!(0,i.k)(a[1]))&&a[0].equals(a[1])))))},n.functions.relate=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,i.G)(a),(0,i.y)(a,3,3,t,e),a[0]instanceof o.Z&&a[1]instanceof o.Z)return(0,c.LV)(a[0],a[1],(0,i.j)(a[2]));if(a[0]instanceof o.Z&&null===a[1])return!1;if(a[1]instanceof o.Z&&null===a[0])return!1;if(null===a[0]&&null===a[1])return!1;throw new h.aV(t,h.rH.InvalidParameter,e)}))},n.functions.intersection=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>(v(a=(0,i.G)(a),t,e),null===a[0]||null===a[1]?null:(0,c.wf)(a[0],a[1]))))},n.functions.union=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{const s=[];if(0===(u=(0,i.G)(u)).length)throw new h.aV(t,h.rH.WrongNumberOfParameters,e);if(1===u.length)if((0,i.m)(u[0])){const n=(0,i.G)(u[0]);for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);s.push(n[r])}}else{if(!(0,i.x)(u[0])){if(u[0]instanceof o.Z)return(0,i.q)((0,a.r1)(u[0]),t.spatialReference);if(null===u[0])return null;throw new h.aV(t,h.rH.InvalidParameter,e)}{const n=(0,i.G)(u[0].toArray());for(let r=0;r<n.length;r++)if(null!==n[r]){if(!(n[r]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);s.push(n[r])}}}else for(let a=0;a<u.length;a++)if(null!==u[a]){if(!(u[a]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);s.push(u[a])}return 0===s.length?null:(0,c.G0)(s)}))},n.functions.difference=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>(v(u=(0,i.G)(u),t,e),null!==u[0]&&null===u[1]?(0,a.r1)(u[0]):null===u[0]?null:(0,c.e5)(u[0],u[1]))))},n.functions.symmetricdifference=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>(v(u=(0,i.G)(u),t,e),null===u[0]&&null===u[1]?null:null===u[0]?(0,a.r1)(u[1]):null===u[1]?(0,a.r1)(u[0]):(0,c.Sp)(u[0],u[1]))))},n.functions.clip=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,i.G)(a),(0,i.y)(a,2,2,t,e),!(a[1]instanceof s.Z)&&null!==a[1])throw new h.aV(t,h.rH.InvalidParameter,e);if(null===a[0])return null;if(!(a[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return null===a[1]?null:(0,c.oq)(a[0],a[1])}))},n.functions.cut=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,i.G)(u),(0,i.y)(u,2,2,t,e),!(u[1]instanceof w.Z)&&null!==u[1])throw new h.aV(t,h.rH.InvalidParameter,e);if(null===u[0])return[];if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return null===u[1]?[(0,a.r1)(u[0])]:(0,c.z7)(u[0],u[1])}))},n.functions.area=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{if((0,i.y)(u,1,2,t,e),null===(u=(0,i.G)(u))[0])return 0;if((0,i.T)(u[0])){const n=await u[0].sumArea((0,a.EI)((0,i.A)(u[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new h.aV(t,h.rH.Cancelled,e);return n}if((0,i.m)(u[0])||(0,i.x)(u[0])){const n=(0,i.J)(u[0],t.spatialReference);return null===n?0:(0,c.CJ)(n,(0,a.EI)((0,i.A)(u[1],-1)))}if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.CJ)(u[0],(0,a.EI)((0,i.A)(u[1],-1)))}))},n.functions.areageodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{if((0,i.y)(u,1,2,t,e),null===(u=(0,i.G)(u))[0])return 0;if((0,i.T)(u[0])){const n=await u[0].sumArea((0,a.EI)((0,i.A)(u[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new h.aV(t,h.rH.Cancelled,e);return n}if((0,i.m)(u[0])||(0,i.x)(u[0])){const n=(0,i.J)(u[0],t.spatialReference);return null===n?0:(0,c.Y4)(n,(0,a.EI)((0,i.A)(u[1],-1)))}if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.Y4)(u[0],(0,a.EI)((0,i.A)(u[1],-1)))}))},n.functions.length=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{if((0,i.y)(u,1,2,t,e),null===(u=(0,i.G)(u))[0])return 0;if((0,i.T)(u[0])){const n=await u[0].sumLength((0,a.Lz)((0,i.A)(u[1],-1)),!1,t.abortSignal);if(t.abortSignal.aborted)throw new h.aV(t,h.rH.Cancelled,e);return n}if((0,i.m)(u[0])||(0,i.x)(u[0])){const n=(0,i.H)(u[0],t.spatialReference);return null===n?0:(0,c.sz)(n,(0,a.Lz)((0,i.A)(u[1],-1)))}if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.sz)(u[0],(0,a.Lz)((0,i.A)(u[1],-1)))}))},n.functions.length3d=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if((0,i.y)(u,1,2,t,e),null===(u=(0,i.G)(u))[0])return 0;if((0,i.m)(u[0])||(0,i.x)(u[0])){const n=(0,i.H)(u[0],t.spatialReference);return null===n?0:!0===n.hasZ?I(n,(0,a.Lz)((0,i.A)(u[1],-1))):(0,c.sz)(n,(0,a.Lz)((0,i.A)(u[1],-1)))}if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return!0===u[0].hasZ?I(u[0],(0,a.Lz)((0,i.A)(u[1],-1))):(0,c.sz)(u[0],(0,a.Lz)((0,i.A)(u[1],-1)))}))},n.functions.lengthgeodetic=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{if((0,i.y)(u,1,2,t,e),null===(u=(0,i.G)(u))[0])return 0;if((0,i.T)(u[0])){const n=await u[0].sumLength((0,a.Lz)((0,i.A)(u[1],-1)),!0,t.abortSignal);if(t.abortSignal.aborted)throw new h.aV(t,h.rH.Cancelled,e);return n}if((0,i.m)(u[0])||(0,i.x)(u[0])){const n=(0,i.H)(u[0],t.spatialReference);return null===n?0:(0,c.kQ)(n,(0,a.Lz)((0,i.A)(u[1],-1)))}if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.kQ)(u[0],(0,a.Lz)((0,i.A)(u[1],-1)))}))},n.functions.distance=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{u=(0,i.G)(u),(0,i.y)(u,2,3,t,e);let s=u[0];((0,i.m)(u[0])||(0,i.x)(u[0]))&&(s=(0,i.K)(u[0],t.spatialReference));let l=u[1];if(((0,i.m)(u[1])||(0,i.x)(u[1]))&&(l=(0,i.K)(u[1],t.spatialReference)),!(s instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);if(!(l instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.TE)(s,l,(0,a.Lz)((0,i.A)(u[2],-1)))}))},n.functions.distancegeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{u=(0,i.G)(u),(0,i.y)(u,2,3,t,e);const s=u[0],o=u[1];if(!(s instanceof f.Z))throw new h.aV(t,h.rH.InvalidParameter,e);if(!(o instanceof f.Z))throw new h.aV(t,h.rH.InvalidParameter,e);const l=new w.Z({paths:[],spatialReference:s.spatialReference});return l.addPath([s,o]),(0,c.kQ)(l,(0,a.Lz)((0,i.A)(u[2],-1)))}))},n.functions.densify=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,i.G)(u),(0,i.y)(u,2,3,t,e),null===u[0])return null;if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);const l=(0,i.g)(u[1]);if(isNaN(l))throw new h.aV(t,h.rH.InvalidParameter,e);if(l<=0)throw new h.aV(t,h.rH.InvalidParameter,e);return u[0]instanceof d.Z||u[0]instanceof w.Z?(0,c.Cz)(u[0],l,(0,a.Lz)((0,i.A)(u[2],-1))):u[0]instanceof s.Z?(0,c.Cz)(Z(u[0]),l,(0,a.Lz)((0,i.A)(u[2],-1))):u[0]}))},n.functions.densifygeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,i.G)(u),(0,i.y)(u,2,3,t,e),null===u[0])return null;if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);const l=(0,i.g)(u[1]);if(isNaN(l))throw new h.aV(t,h.rH.InvalidParameter,e);if(l<=0)throw new h.aV(t,h.rH.InvalidParameter,e);return u[0]instanceof d.Z||u[0]instanceof w.Z?(0,c.j2)(u[0],l,(0,a.Lz)((0,i.A)(u[2],-1))):u[0]instanceof s.Z?(0,c.j2)(Z(u[0]),l,(0,a.Lz)((0,i.A)(u[2],-1))):u[0]}))},n.functions.generalize=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,i.G)(u),(0,i.y)(u,2,4,t,e),null===u[0])return null;if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);const s=(0,i.g)(u[1]);if(isNaN(s))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.D$)(u[0],s,(0,i.h)((0,i.A)(u[2],!0)),(0,a.Lz)((0,i.A)(u[3],-1)))}))},n.functions.buffer=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,i.G)(u),(0,i.y)(u,2,3,t,e),null===u[0])return null;if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);const s=(0,i.g)(u[1]);if(isNaN(s))throw new h.aV(t,h.rH.InvalidParameter,e);return 0===s?(0,a.r1)(u[0]):(0,c.f3)(u[0],s,(0,a.Lz)((0,i.A)(u[2],-1)))}))},n.functions.buffergeodetic=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,i.G)(u),(0,i.y)(u,2,3,t,e),null===u[0])return null;if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);const s=(0,i.g)(u[1]);if(isNaN(s))throw new h.aV(t,h.rH.InvalidParameter,e);return 0===s?(0,a.r1)(u[0]):(0,c.rd)(u[0],s,(0,a.Lz)((0,i.A)(u[2],-1)))}))},n.functions.offset=function(t,e){return n.standardFunctionAsync(t,e,((n,r,u)=>{if(u=(0,i.G)(u),(0,i.y)(u,2,6,t,e),null===u[0])return null;if(!(u[0]instanceof d.Z||u[0]instanceof w.Z))throw new h.aV(t,h.rH.InvalidParameter,e);const s=(0,i.g)(u[1]);if(isNaN(s))throw new h.aV(t,h.rH.InvalidParameter,e);const o=(0,i.g)((0,i.A)(u[4],10));if(isNaN(o))throw new h.aV(t,h.rH.InvalidParameter,e);const l=(0,i.g)((0,i.A)(u[5],0));if(isNaN(l))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.cv)(u[0],s,(0,a.Lz)((0,i.A)(u[2],-1)),(0,i.j)((0,i.A)(u[3],"round")).toLowerCase(),o,l)}))},n.functions.rotate=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{a=(0,i.G)(a),(0,i.y)(a,2,3,t,e);let u=a[0];if(null===u)return null;if(!(u instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);u instanceof s.Z&&(u=d.Z.fromExtent(u));const l=(0,i.g)(a[1]);if(isNaN(l))throw new h.aV(t,h.rH.InvalidParameter,e);const w=(0,i.A)(a[2],null);if(null===w)return(0,c.U1)(u,l);if(w instanceof f.Z)return(0,c.U1)(u,l,w);throw new h.aV(t,h.rH.InvalidParameter,e)}))},n.functions.centroid=function(t,e){return n.standardFunctionAsync(t,e,((n,r,c)=>{if(c=(0,i.G)(c),(0,i.y)(c,1,1,t,e),null===c[0])return null;let y=c[0];if(((0,i.m)(c[0])||(0,i.x)(c[0]))&&(y=(0,i.K)(c[0],t.spatialReference)),null===y)return null;if(!(y instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return y instanceof f.Z?(0,i.q)((0,a.r1)(c[0]),t.spatialReference):y instanceof d.Z?y.centroid:y instanceof w.Z?(0,u.s9)(y):y instanceof l.Z?(0,u.Ay)(y):y instanceof s.Z?y.center:null}))},n.functions.multiparttosinglepart=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,u)=>{u=(0,i.G)(u),(0,i.y)(u,1,1,t,e);const m=[];if(null===u[0])return null;if(!(u[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);if(u[0]instanceof f.Z)return[(0,i.q)((0,a.r1)(u[0]),t.spatialReference)];if(u[0]instanceof s.Z)return[(0,i.q)((0,a.r1)(u[0]),t.spatialReference)];const p=await(0,c.og)(u[0]);if(p instanceof d.Z){const n=[],t=[];for(let e=0;e<p.rings.length;e++)if(p.isClockwise(p.rings[e])){const t=(0,y.im)({rings:[p.rings[e]],hasZ:!0===p.hasZ,hazM:!0===p.hasM,spatialReference:p.spatialReference.toJSON()});n.push(t)}else t.push({ring:p.rings[e],pt:p.getPoint(e,0)});for(let e=0;e<t.length;e++)for(let r=0;r<n.length;r++)if(n[r].contains(t[e].pt)){n[r].addRing(t[e].ring);break}return n}if(p instanceof w.Z){const n=[];for(let t=0;t<p.paths.length;t++){const e=(0,y.im)({paths:[p.paths[t]],hasZ:!0===p.hasZ,hazM:!0===p.hasM,spatialReference:p.spatialReference.toJSON()});n.push(e)}return n}if(u[0]instanceof l.Z){const n=(0,i.q)((0,a.r1)(u[0]),t.spatialReference);for(let t=0;t<n.points.length;t++)m.push(n.getPoint(t));return m}return null}))},n.functions.issimple=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,i.G)(a),(0,i.y)(a,1,1,t,e),null===a[0])return!0;if(!(a[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.Gg)(a[0])}))},n.functions.simplify=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,i.G)(a),(0,i.y)(a,1,1,t,e),null===a[0])return null;if(!(a[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.og)(a[0])}))},n.functions.convexhull=function(t,e){return n.standardFunctionAsync(t,e,((n,r,a)=>{if(a=(0,i.G)(a),(0,i.y)(a,1,1,t,e),null===a[0])return null;if(!(a[0]instanceof o.Z))throw new h.aV(t,h.rH.InvalidParameter,e);return(0,c.JI)(a[0])}))},n.functions.getuser=function(t,e){return n.standardFunctionAsync(t,e,(async(n,r,a)=>{(0,i.y)(a,0,2,t,e);let u=(0,i.A)(a[1],""),s=!0===u;if(u=!0===u||!1===u?"":(0,i.j)(u),0===a.length||a[0]instanceof p.Z){let n=null;t.services&&t.services.portal&&(n=t.services.portal),a.length>0&&(n=(0,g._)(a[0],n));const e=await(0,g.q)(n,u,s);if(e){const n=JSON.parse(JSON.stringify(e));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return m.Z.convertObjectToArcadeDictionary(n,(0,i.C)(t))}return null}let o=null;if((0,i.T)(a[0])&&(o=a[0]),o){if(s=!1,u)return null;await o.load();const n=await o.getOwningSystemUrl();if(!n){if(!u){const n=await o.getIdentityUser();return n?m.Z.convertObjectToArcadeDictionary({username:n},(0,i.C)(t)):null}return null}let e=null;t.services&&t.services.portal&&(e=t.services.portal),e=(0,g._)(new p.Z(n),e);const r=await(0,g.q)(e,u,s);if(r){const n=JSON.parse(JSON.stringify(r));for(const t of["lastLogin","created","modified"])void 0!==n[t]&&null!==n[t]&&(n[t]=new Date(n[t]));return m.Z.convertObjectToArcadeDictionary(n,(0,i.C)(t))}return null}throw new h.aV(t,h.rH.InvalidParameter,e)}))})}},93249:(n,t,e)=>{e.d(t,{_:()=>u,q:()=>s});var r=e(19545),a=e(76200),i=e(70032);function u(n,t){return null===n?t:new i.Z({url:n.field("url")})}async function s(n,t,e){const i=r.id?.findCredential(n.restUrl);if(!i)return null;if("loaded"===n.loadStatus&&""===t&&n.user&&n.user.sourceJSON&&!1===e)return n.user.sourceJSON;if(""===t){const t=await(0,a.default)(n.restUrl+"/community/self",{responseType:"json",query:{f:"json",...!1===e?{}:{returnUserLicenseTypeExtensions:!0}}});if(t.data){const n=t.data;if(n&&n.username)return n}return null}const u=await(0,a.default)(n.restUrl+"/community/users/"+t,{responseType:"json",query:{f:"json"}});if(u.data){const n=u.data;return n.error?null:n}return null}},84178:(n,t,e)=>{e.d(t,{CJ:()=>j,Cz:()=>J,D$:()=>C,ED:()=>v,G0:()=>R,Gg:()=>V,JI:()=>G,LV:()=>H,Nm:()=>I,Sp:()=>z,TE:()=>m,U1:()=>k,W4:()=>A,Y4:()=>q,cv:()=>N,e5:()=>x,f3:()=>L,fS:()=>p,j2:()=>O,jU:()=>h,kK:()=>g,kQ:()=>T,og:()=>P,oq:()=>d,r3:()=>y,rd:()=>b,sz:()=>E,uh:()=>Z,wf:()=>F,z7:()=>w});e(59486);var r=e(31009),a=(e(585),e(77981));function i(n){return Array.isArray(n)?n[0]?.spatialReference:n?.spatialReference}function u(n){return n?Array.isArray(n)?n.map(u):n.toJSON?n.toJSON():n:n}function s(n){return Array.isArray(n)?n.map((n=>(0,a.im)(n))):(0,a.im)(n)}function o(n,t){let e;return Array.isArray(n)?e=n:(e=[],e.push(n),null!=t&&e.push(t)),e}let c;async function l(){return c||(c=(0,r.bA)("geometryEngineWorker",{strategy:"distributed"})),c}async function f(n,t){return(await l()).invoke("executeGEOperation",{operation:n,parameters:u(t)})}async function d(n,t){return s(await f("clip",[i(n),n,t]))}async function w(n,t){return s(await f("cut",[i(n),n,t]))}function y(n,t){return f("contains",[i(n),n,t])}function h(n,t){return f("crosses",[i(n),n,t])}function m(n,t,e){return f("distance",[i(n),n,t,e])}function p(n,t){return f("equals",[i(n),n,t])}function g(n,t){return f("intersects",[i(n),n,t])}function A(n,t){return f("touches",[i(n),n,t])}function Z(n,t){return f("within",[i(n),n,t])}function v(n,t){return f("disjoint",[i(n),n,t])}function I(n,t){return f("overlaps",[i(n),n,t])}function H(n,t,e){return f("relate",[i(n),n,t,e])}function V(n){return f("isSimple",[i(n),n])}async function P(n){return s(await f("simplify",[i(n),n]))}async function G(n){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return s(await f("convexHull",[i(n),n,t]))}async function x(n,t){return s(await f("difference",[i(n),n,t]))}async function z(n,t){return s(await f("symmetricDifference",[i(n),n,t]))}async function F(n,t){return s(await f("intersect",[i(n),n,t]))}async function R(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const e=o(n,t);return s(await f("union",[i(e),e]))}async function N(n,t,e,r,a,u){return s(await f("offset",[i(n),n,t,e,r,a,u]))}async function L(n,t,e){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const a=[i(n),n,t,e,r];return s(await f("buffer",a))}async function b(n,t,e,r,a,u){const o=[i(n),n,t,e,r,a,u];return s(await f("geodesicBuffer",o))}function S(n){return"xmin"in n?n.center:"x"in n?n:n.extent?.center}async function k(n,t,e){if(null==n)throw new D;const r=n.spatialReference;if(null==(e=e??S(n)))throw new D;const a=n.constructor.fromJSON(await f("rotate",[r,n,t,e]));return a.spatialReference=r,a}async function C(n,t,e,r){return s(await f("generalize",[i(n),n,t,e,r]))}async function J(n,t,e){return s(await f("densify",[i(n),n,t,e]))}async function O(n,t,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return s(await f("geodesicDensify",[i(n),n,t,e,r]))}function j(n,t){return f("planarArea",[i(n),n,t])}function E(n,t){return f("planarLength",[i(n),n,t])}function q(n,t,e){return f("geodesicArea",[i(n),n,t,e])}function T(n,t,e){return f("geodesicLength",[i(n),n,t,e])}class D extends Error{constructor(){super("Illegal Argument Exception")}}}}]);
//# sourceMappingURL=3806.7544c9b0.chunk.js.map