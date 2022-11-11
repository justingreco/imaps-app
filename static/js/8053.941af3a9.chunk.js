"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[8053],{50256:(e,t,n)=>{n.d(t,{K:()=>i});var r=n(8548),s=n(61109);function i(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=e.stride;return e.fieldNames.filter((t=>{const n=e.fields.get(t).optional;return!(n&&n.glPadding)})).map((r=>{const i=e.fields.get(r),a=i.constructor.ElementCount,c=o(i.constructor.ElementType),u=i.offset,l=!(!i.optional||!i.optional.glNormalized);return new s.G(r,a,c,u,n,l,t)}))}function o(e){const t=a[e];if(t)return t;throw new Error("BufferType not supported in WebGL")}const a={u8:r.g.UNSIGNED_BYTE,u16:r.g.UNSIGNED_SHORT,u32:r.g.UNSIGNED_INT,i8:r.g.BYTE,i16:r.g.SHORT,i32:r.g.INT,f32:r.g.FLOAT}},22526:(e,t,n)=>{n.d(t,{HL:()=>i,aj:()=>o});var r=n(25158),s=n(55158);function i(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:a(e.layout)}}function o(e){return function(e){const t=(0,s.U$)();return t.stride=e.stride,t.fieldNames=e.fieldNames,e.fields.forEach((e=>t.fields.set(e[0],{...e[1],constructor:l(e[1].constructor)}))),t}(e.layout).createView(e.buffer)}function a(e){const t=new Array;return e.fields.forEach(((e,n)=>{const r={...e,constructor:u(e.constructor)};t.push([n,r])})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const c=[r.ly,r.Eu,r.ct,r.ek,r.gK,r.bj,r.oS,r.q6,r.fP,r.Cd,r.ey,r.O1,r.D_,r.xA,r.ne,r.mc,r.av,r.TS,r.mw,r.v6,r.Nu,r.qt,r.G5,r.hu,r.Hz,r.Vs,r.P_,r.ir,r.o7,r.or,r.n1,r.zO,r.Jj,r.wA,r.PP,r.TN];function u(e){return`${e.ElementType}_${e.ElementCount}`}function l(e){return f.get(e)}const f=new Map;c.forEach((e=>f.set(u(e),e)))},95569:(e,t,n)=>{n.r(t),n.d(t,{default:()=>a});var r=n(22526),s=n(67009),i=n(10662),o=n(83715);class a{async extract(e){const t=c(e),n=(0,o.Kl)(t),r=[t.data.buffer];return{result:u(n,r),transferList:r}}async extractComponentsEdgeLocations(e){const t=c(e),n=(0,o.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),s=(0,i.n)(n,f,d),a=[];return{result:(0,r.HL)(s.regular.instancesData,a),transferList:a}}async extractEdgeLocations(e){const t=c(e),n=(0,o.kY)(t.data,t.skipDeduplicate,t.indices,t.indicesLength),s=(0,i.n)(n,l,d),a=[];return{result:(0,r.HL)(s.regular.instancesData,a),transferList:a}}}function c(e){return{data:s.tf.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function u(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:(0,r.HL)(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:(0,r.HL)(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}}const l=new class{allocate(e){return o.Yr.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1)}},f=new class{allocate(e){return o.n_.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex)}},d={allocate:()=>null,write:()=>{},trim:()=>null}}}]);
//# sourceMappingURL=8053.941af3a9.chunk.js.map