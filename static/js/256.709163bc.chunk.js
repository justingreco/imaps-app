"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[256],{50256:(t,e,n)=>{n.d(e,{K:()=>r});var o=n(8548),i=n(61109);function r(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const n=t.stride;return t.fieldNames.filter((e=>{const n=t.fields.get(e).optional;return!(n&&n.glPadding)})).map((o=>{const r=t.fields.get(o),l=r.constructor.ElementCount,u=s(r.constructor.ElementType),p=r.offset,a=!(!r.optional||!r.optional.glNormalized);return new i.G(o,l,u,p,n,a,e)}))}function s(t){const e=l[t];if(e)return e;throw new Error("BufferType not supported in WebGL")}const l={u8:o.g.UNSIGNED_BYTE,u16:o.g.UNSIGNED_SHORT,u32:o.g.UNSIGNED_INT,i8:o.g.BYTE,i16:o.g.SHORT,i32:o.g.INT,f32:o.g.FLOAT}}}]);
//# sourceMappingURL=256.709163bc.chunk.js.map