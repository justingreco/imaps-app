"use strict";(globalThis.webpackChunkimaps_app=globalThis.webpackChunkimaps_app||[]).push([[2078],{62078:(e,t,a)=>{a.r(t),a.d(t,{addOrUpdateResource:()=>i,contentToBlob:()=>h,fetchResources:()=>l,getSiblingOfSameType:()=>m,getSiblingOfSameTypeI:()=>f,removeAllResources:()=>u,removeResource:()=>c,splitPrefixFileNameAndExtension:()=>d});var r=a(76200),s=a(10064),o=a(92026),n=a(35995);async function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0;await e.load(a);const r=(0,n.v_)(e.itemUrl,"resources"),{start:s=1,num:l=10,sortOrder:i="asc",sortField:c="created"}=t,u={query:{start:s,num:l,sortOrder:i,sortField:c,token:e.apiKey},signal:(0,o.U2)(a,"signal")},p=await e.portal._request(r,u);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((t=>{let{created:a,size:r,resource:s}=t;return{created:new Date(a),size:r,resource:e.resourceFromPath(s)}}))}}async function i(e,t,a,r){if(!e.hasPath())throw new s.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const l=e.portalItem;await l.load(r);const i=(0,n.v_)(l.userItemUrl,"add"===t?"addResources":"updateResources"),[c,u]=p(e.path),d=await h(a),m=new FormData;return c&&"."!==c&&m.append("resourcesPrefix",c),m.append("fileName",u),m.append("file",d,u),m.append("f","json"),(0,o.pC)(r)&&r.access&&m.append("access",r.access),await l.portal._request(i,{method:"post",body:m,signal:(0,o.U2)(r,"signal")}),e}async function c(e,t,a){if(!t.hasPath())throw new s.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(a);const r=(0,n.v_)(e.userItemUrl,"removeResources");await e.portal._request(r,{method:"post",query:{resource:t.path},signal:(0,o.U2)(a,"signal")}),t.portalItem=null}async function u(e,t){await e.load(t);const a=(0,n.v_)(e.userItemUrl,"removeResources");return e.portal._request(a,{method:"post",query:{deleteAll:!0},signal:(0,o.U2)(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,a]=function(e){const t=(0,n.Ml)(e);return(0,o.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}(e),[r,s]=p(t);return[r,s,a]}async function h(e){return e instanceof Blob?e:(await(0,r.default)(e.url,{responseType:"blob"})).data}function m(e,t){if(!e.hasPath())return null;const[a,,r]=d(e.path);return e.portalItem.resourceFromPath((0,n.v_)(a,t+r))}function f(e,t){if(!e.hasPath())return null;const[a,,r]=d(e.path);return e.portalItem.resourceFromPath((0,n.v_)(a,t+r))}}}]);
//# sourceMappingURL=2078.34efbc89.chunk.js.map