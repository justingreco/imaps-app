"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[9154],{59154:(t,a,s)=>{s.r(a),s.d(a,{queryNamedTraceConfigurations:()=>p});var e=s(76200),r=s(23084),n=s(27366),o=s(46784),i=s(49861),g=(s(25243),s(63780),s(69912)),c=s(79076);let u=class extends o.wq{constructor(t){super(t),this.namedTraceConfigurations=[]}};(0,n._)([(0,i.Cb)({type:[c.Z],json:{read:{source:"traceConfigurations"},write:{target:"traceConfigurations"}}})],u.prototype,"namedTraceConfigurations",void 0),u=(0,n._)([(0,g.j)("esri.rest.networks.support.QueryNamedTraceConfigurationsResult")],u);const l=u;async function p(t,a,s){const n=(0,r.en)(t),o=a.toJSON();a.globalIds&&a.globalIds.length>0&&(o.globalIds=JSON.stringify(a.globalIds)),a.creators&&a.creators.length>0&&(o.creators=JSON.stringify(a.creators)),a.tags&&a.tags.length>0&&(o.tags=JSON.stringify(a.tags)),a.names&&a.names.length>0&&(o.names=JSON.stringify(a.names));const i={...o,f:"json"},g=(0,r.cv)({...n.query,...i}),c=(0,r.lA)(g,{...s,method:"post"}),u=`${n.path}/traceConfigurations/query`,{data:p}=await(0,e.default)(u,c);return p?l.fromJSON(p):null}}}]);
//# sourceMappingURL=9154.0481cbd2.chunk.js.map